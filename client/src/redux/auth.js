import * as actionTypes from './actionTypes';

export const Auth = (state = {
        isLoading: false,
        isAuthenticated: false,
        errMess: null,
        user: {favorites: []},
        favorites: []
    }, action) => {
    switch (action.type) {
        //login
        case actionTypes.LOGIN_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: false
            };
        case actionTypes.LOGIN_SUCCESS:
            return {...state,
                user: action.user,
                isLoading: false,
                isAuthenticated: true,
                errMess: ''
            };
        case actionTypes.LOGIN_FAILURE:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                errMess: action.message
            };
        case actionTypes.LOGOUT_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: true
            };

        case actionTypes.LOGOUT_SUCCESS:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                user: {favorites: []}
            };
        //signup
        case actionTypes.SINGUP_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: false
            };
        case actionTypes.SINGUP_SUCCESS:
            return {...state,
                isLoading: false
            };
        case actionTypes.SINGUP_FAILED:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                errMess: action.message
            };
        //oauth
        case actionTypes.OAUTH_LOGIN_SUCCESS:
            return state;
       
        default:
            return state;
    }
}