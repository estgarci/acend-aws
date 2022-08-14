const express = require('express');
const flightsRouter = express.Router();
const cors = require('./cors');
const fetch = require('cross-fetch');
const authenticate = require('../authenticate');

flightsRouter.route('/')
.options(cors.corsWithOptions,  (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    const origin = req.query.origin
    const destination = req.query.destination
    if (origin, destination){
        const api_environment = `https://aeroapi.flightaware.com/aeroapi`
        const api_endpoint = `/airports/${origin}/flights/to/${destination}?type=Airline`
        fetch(api_environment + api_endpoint,
            {
                headers:{
                    'x-apikey' : process.env.AERO_API_KEY}})
            .then((response) => {
                if (response.status == 200){
                    return response.json()
                }
                else{
                    const err = new Error('Flights not found between origin and destination');
                    err.status = 404;
                    return next();
                }
            })
            .then((response) => {
                res.statusCoDde = 200;
                res.setHeader('Content-Type', 'application/json');
                res.send(response.flights.map(item => item.segments[0]));
            })    
            .catch(() => {
                const err = new Error('Something with searching flights went wrong');
                err.status = 404;
                return next(err);
            });
    }
})

module.exports = flightsRouter;