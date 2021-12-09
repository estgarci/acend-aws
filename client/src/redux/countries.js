import * as actionTypes from './actionTypes';

export const Countries = (state = {
        isLoading: true,
        errMess: null,
        countries: []
    }, action) => {
    switch (action.type) {
        case actionTypes.ADD_COUNTRIES:
            return {...state, isLoading: false, errMess: null, countries: action.payload};
        case actionTypes.COUNTRIES_LOADING:
            return {...state, isLoading: true, errMess: null, countries: []};
        case actionTypes.COUNTRIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};