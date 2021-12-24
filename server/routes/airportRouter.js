const express = require('express');
const Airport = require('../models/airports');
const authenticate = require('../authenticate');

const airportRouter = express.Router();

const cors = require('./cors');

airportRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, cors.corsWithOptions, (req, res, next) => {
    Airport.find()
    .then(airports => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(airports);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /airports');
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /airports');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /airports');
});


airportRouter.route('/:airportId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Airport.findById(req.params.airportId)
    .then(airport => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(airport);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /airports/${req.params.airportId}`);
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Airport.findByIdAndUpdate(req.params.airportId, {
        $set: req.body
    }, { new: true })
    .then(airport => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(airport);
    })
    .catch(err => next(err));
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Airport.findByIdAndDelete(req.params.airportId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = airportRouter;
