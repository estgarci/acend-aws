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
        const fetch_response = await fetch(api_environment + api_endpoint, {
                            headers:{
                                'x-apikey' : 'AcI8LX5FloLLatSlDGLwwrq0tfWZ0AXd'
                            }}).catch(err => next(err));
        const json = await fetch_response.json().catch(err => next(err));
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        //responds with a list of flight objects
        res.json(json.flights.map(item => item.segments[0]));
    }
    else{
        res.statusCode = 404;
        res.statusMessage = "Incorrect query parameters";
    }
})

module.exports = flightsRouter;