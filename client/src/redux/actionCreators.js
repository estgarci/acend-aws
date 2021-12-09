import * as actionTypes from './actionTypes';
import axios from 'axios';

// coutries //
export const fetchCountries  = () => dispatch => {
    addCountries(await axios.get('http://localhost:3001/countries'));
}
export const countriesLoading = () => ({
    type: actionTypes.COUNTRIES_LOADING
});
export const countriesFailed = () => ({
    type: actionTypes.COUNTRIES_FAILED
});
export const addCountries = () => ({
    type: actionTypes.ADD_COUNTRIES
});
// airports //
export const fetchAirports  = () => dispatch => {
    let response = await axios.get('http://localhost:3001/airports')
    let normalAirports = response.data.filter( (airport) => airport.type === 'large_airport' || airport.type === 'medium_airport')
    
    addAirports(normalAirports);
}
export const airportsLoading = () => ({
    type: actionTypes.COUNTRIES_LOADING
});
export const airportsFailed = () => ({
    type: actionTypes.COUNTRIES_LOADING
});
export const addAirports = () => ({
    type: actionTypes.ADD_AIRPORTS
});

