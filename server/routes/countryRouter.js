const express = require('express');
const Country = require('../models/countries')

const countryRouter = express.Router();

const cors = require('./cors');

countryRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Country.find()
    .then(countries => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(countries);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /countriess');
})
.put(cors.corsWithOptions,(req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /countriess');
})
.delete(cors.corsWithOptions, (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /countriess');
});


countryRouter.route('/:countryId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Country.findById(req.params.countryId)
    .then(country => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(country);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /countries/${req.params.countryId}`);
})
.put(cors.corsWithOptions, (req, res, next) => {
    Country.findByIdAndUpdate(req.params.countryId, {
        $set: req.body
    }, { new: true })
    .then(country => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(country);
    })
    .catch(err => next(err));
})
.delete(cors.corsWithOptions, (req, res, next) => {
    Country.findByIdAndDelete(req.params.countryId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = countryRouter;