const express = require('express');
const favoriteRouter = express.Router();
const authenticate = require('../authenticate');
const Favorite = require('../models/favorite');
const cors = require('./cors');

favoriteRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findOne({user: req.user._id})
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
    console.log('about to look for a user with ')
    Favorite.findOne({user: req.user._id})
    .then(favorite => {
        //finding row
        // console.log('finding row', favorite.flights.slice(-1)[0].fa_flight_id, req.body.fa_flight_id)
        if (favorite) {
            console.log('favorite row has been found')
                favorite.flights.push(req.body)
                console.log('about to save...', favorite)
                favorite.save()
                .then(favorite => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({"exists": true, "flights": favorite.flights});
                })
                .catch(err =>{  console.log('This favorite has already been added', err);
                res.statusCode = 200;
                res.json({"exists": true, "flights": favorite.flights});next(err)});
        
        } else {
            console.log('creating a new row in the the favorites table')
            Favorite.create({user: req.user._id, flights: [{...req.body}]})
                .then(favorite => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({"exists": true, "flights": favorite.flights});
                })
                .catch(err => {
                    console.log('could not create a row? why?', 'body:', req.body)
                    next(err)})
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
            const index = 0;
            favorite.flights.forEach((flight,i) => {
                    if(flight.fa_flight_id == req.params.flight){
                        favorite.flights.splice(i, 1);
            }})
            favorite.save()
            .then(favorite => {
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