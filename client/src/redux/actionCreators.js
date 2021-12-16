import * as actionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';
import axios from 'axios';

// coutries //
export const fetchCountries  = () => dispatch => {

    dispatch(countriesLoading())

    return fetch(baseUrl + 'api/countries')
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(countries => dispatch(addCountries(countries)))
    .catch(error => dispatch(countriesFailed(error.message)));
}

export const countriesLoading = () => ({
    type: actionTypes.COUNTRIES_LOADING
});
export const countriesFailed = errMess => ({
    type: actionTypes.COUNTRIES_FAILED,
    payload: errMess
});
export const addCountries = countries => ({
    type: actionTypes.ADD_COUNTRIES,
    payload: countries
});
// airports //
export const fetchAirports  = () => dispatch => {
    dispatch(airportsLoading());

    return fetch(baseUrl + 'api/airports')
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )

    .then(response => response.json())
    .then(allAirports => allAirports.filter( airport => (airport.iata_code && airport.municipality && airport.name)))
    .then(cleanAirports => dispatch(addAirports(cleanAirports)))
    .catch(error => dispatch(airportsFailed(error.message)));
}
export const airportsLoading = () => ({
    type: actionTypes.AIRPORTS_LOADING
});
export const airportsFailed = errMess => ({
    type: actionTypes.AIRPORTS_FAILED,
    payload: errMess
});
export const addAirports = airports => ({
    type: actionTypes.ADD_AIRPORTS,
    payload: airports
});


export const fetchFlights  = query => dispatch => {

    dispatch(flightsLoading())
    // &departure=${query.departure}&arrival=${query.arrival}`)
    console.log(query.origin)

    // const uri = baseUrl +  'api/flights?origin=' + query.origin + '&destination=' + query.destination;
    // const otheruri = baseUrl + `api/flights?origin=${query.origin}&destination=${query.destination}`

    // console.log(uri, otheruri)
    
    return fetch(baseUrl + `api/flights?origin=${query.origin}&destination=${query.destination}`)
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(flights => dispatch(addFlights(flights)))
    .catch(error => dispatch(flightsFailed(error.message)));
}

export const flightsLoading = () => ({
    type: actionTypes.FLIGHTS_LOADING
});
export const flightsFailed = errMess => ({
    type: actionTypes.FLIGHTS_FAILED,
    payload: errMess
});
export const addFlights = flights => ({
    type: actionTypes.ADD_FLIGHTS,
    payload: flights
});

