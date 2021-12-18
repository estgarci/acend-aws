import * as actionTypes from './actionTypes';

export const Flights = (state = {
        isLoading: false,
        errMess: null,
        flights: []
    }, action) => {
    switch (action.type) {
        case actionTypes.ADD_FLIGHTS:
            return {...state, isLoading: false, errMess: null, flights: action.payload};
        case actionTypes.FLIGHTS_LOADING:
            return {...state, isLoading: true, errMess: null, flights: []};
        case actionTypes.FLIGHTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};