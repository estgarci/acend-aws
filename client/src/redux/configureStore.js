import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Airports } from './airports';
import { Countries } from './countries';
import { Flights } from './flights';
import { SearchFlights } from './forms';
import { Auth } from './auth';

//create store function from redux, and pass it the initial function, then return the store
//the reducer function here, replaced the original reducer function

export const ConfigureStore = () => {
    //we have multiple reducers so we will use the combineReducers function from redux that takes in reducers in an object as an argument. we are combining the reducers here by passing an object...
    const store = createStore(
        combineReducers({
            auth: Auth,
            countries: Countries,
            airports: Airports,
            flights: Flights
        }),  
        applyMiddleware(thunk, logger)
    );
    return store;
};