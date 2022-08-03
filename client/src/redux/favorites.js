import * as ActionTypes from './actionTypes';

export const Favorites = (state = {
        isLoading: true,
        errMess: null,
        favorites: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_FAVORITES:
            return {...state, isLoading: false, errMess: null, favorites: action.payload.flights};
            
        case ActionTypes.FAVORITES_LOADING:
            return {...state, isLoading: true, errMess: null, favorites: []};

        case ActionTypes.FAVORITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, favorites: []};

        default:
            return state;
    }
}