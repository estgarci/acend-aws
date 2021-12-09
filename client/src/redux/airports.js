import * as actionTypes from './actionTypes';

export const Airports = (state = {
        isLoading: true,
        errMess: null,
        airports: []
    }, action) => {
    switch (action.type) {
        case actionTypes.ADD_AIRPORTS:
            return {...state, isLoading: false, errMess: null, airports: action.payload};
        case actionTypes.AIRPORTS_LOADING:
            return {...state, isLoading: true, errMess: null, airports: []};
        case actionTypes.AIRPORTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};