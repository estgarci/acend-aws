const express = require('express');
const flightsRouter = express.Router();
const cors = require('./cors');
const fetch = require('cross-fetch');

flightsRouter.route('/')
.options(cors.corsWithOptions,  (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    const origin = req.query.origin
    const destination = req.query.destination
    // const departure = req.params.departure
    // const arrival = req.params.arrival
    if (origin, destination){
        const api_environment = `https://aeroapi.flightaware.com/aeroapi`
        const api_endpoint = `/airports/${origin}/flights/to/${destination}?type=Airline`
        console.log(process.env)
        const fetch_response = await fetch(api_environment + api_endpoint, {
                            headers:{
                                'x-apikey' : process.env.AERO_API_KEY
                            }}).catch(err => next(err));
        const jsonResponse = await fetch_response.json().catch(err => next(err));
      
        if (jsonResponse.flights.length){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(jsonResponse.flights.map(item => item.segments[0]));
        }else{
            const err = new Error('Flights not found between origin and destination');
            err.status = 404;
            return next(err);
        }
    } 
})

module.exports = flightsRouter;