const express = require('express');
const favoriteRouter = express.Router();
const authenticate = require('../authenticate');
const Favorite = require('../models/favorite');
const Flight = require('../models/flight');
const User = require('../models/user');
const cors = require('./cors');

favoriteRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findOne({user: req.user._id})
    // User.findOne({_id: req.user._id})
    .then(favorite => {
        if (!favorite.flights) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({"exists": false, "flights": null});
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({"exists": true, "flights": favorite.flights});
        }
    })
    .catch(err => {next(err)});
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findOne({user: req.user._id})
    .then(favorite => {
        if (favorite) {
            if ((!favorite.flights.some(flight => flight.fa_flight_id == req.body.fa_flight_id))) {
                favorite.flights.push(req.body)
                favorite.save()
                .then(favorite => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({"exists": true, "flights": favorite.flights});
                })
                .catch(err => next(err));
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.json({"exists": true, "flights": favorite.flights});
            }
        } else {
            Favorite.create({user: req.user._id, flights: [{...req.body}]})
                .then(favorite => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({"exists": true, "flights": favorite.flights});
                })
                .catch(err => next(err))
        }
    }).catch(err => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /favorites');
})

































favoriteRouter.route('/:flight')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    
    Favorite.findOne({user: req.user._id })
    .then(favorite => {
        if (favorite) {
            console.log('user has favorites')
            const index = 0;
            favorite.flights.forEach((flight,i) => {
                    if(flight.fa_flight_id == req.params.flight){
                        favorite.flights.splice(i, 1);
            }})
          
            favorite.save()
            .then(favorite => {
                console.log(favorite.flights.length)
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({"exists": false, "flights": favorite.flights});
            }).catch(err => next(err));
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(favorite.flights);
        }
    }).catch(err => next(err))
});


module.exports = favoriteRouter;