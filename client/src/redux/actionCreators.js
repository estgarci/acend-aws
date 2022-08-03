import * as actionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';


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

//flights
export const fetchFlights  = query => dispatch => {
    dispatch(flightsLoading())
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

export const requestLogin = creds => {
    return {
        type: actionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (user) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        user
    }
}
export const requestOauthLogin = () => {
    return {
        type: actionTypes.OAUTH_LOGIN_SUCCESS
    }
}
export const loginError = message => {
    return {
        type: actionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = creds => dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin())
    return fetch(baseUrl + 'api/users/login', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds),
        credentials: 'include'
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => {
        console.log('response')
        if (response.success) {
            localStorage.setItem('user', JSON.stringify(response.user));
            dispatch(fetchFavorites())
            dispatch(receiveLogin(response.user));
        } else {
            const error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

//handle login and authentication
export const requestLogout = () => {
    return {
        type: actionTypes.LOGOUT_REQUEST
    }
}  
export const receiveLogout = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
}
export const logoutUser = () => dispatch => {
    dispatch(requestLogout())
    return fetch(baseUrl + 'api/users/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(response => {
                if (response){
                    localStorage.clear();
                    dispatch(receiveLogout())
                }
                else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
        },
        error => { throw error; })
}

export const fetchUser = () => dispatch => {
    // only fetch user if not authorized
    return fetch(baseUrl + 'api/users/oauth/login/success', {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json'
        },
        //include http only cookies, use the 'same-origin' credentials to manipulate the cookie on the other end
        credentials: 'include'
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            localStorage.setItem('user', JSON.stringify(response.user));
            dispatch(fetchFavorites())
            dispatch(receiveLogin(response.user));
        } else {
            localStorage.clear();
            const error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

//sign up
export const singupRequest = () => ({
    type: actionTypes.SINGUP_REQUEST
});

export const singupFailed = (errMess) => ({
    type: actionTypes.SINGUP_FAILED,
    payload: errMess
});

export const singupSuccess = () => ({
    type: actionTypes.SINGUP_SUCCESS
});

//favorites
export const postFavorite = (flight) => dispatch => {
    
    return fetch(baseUrl + 'api/favorites' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(flight),
        credentials: 'include'
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                localStorage.clear()
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(favorites => {
        dispatch(addFavorites(favorites));
    })
    .catch(error => dispatch(favoritesFailed(error.message)));
}

export const deleteFavorite = flight => dispatch => {
    return fetch(baseUrl + 'api/favorites/' + flight, {
        method: 'DELETE',
        credentials: 'include'
    })
    .then(response => {
        console.log(response)
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(favorites => {
        dispatch(addFavorites(favorites));
    })
    .catch(error => dispatch(favoritesFailed(error.message)));
};

export const favoritesLoading = () => ({
    type: actionTypes.FAVORITES_LOADING
});

export const favoritesFailed = errMess => ({
    type: actionTypes.FAVORITES_FAILED,
    payload: errMess
});

export const addFavorites = favorites => ({
    type: actionTypes.ADD_FAVORITES,
    payload: favorites
});

export const fetchFavorites = () => dispatch => {
    dispatch(favoritesLoading());

    return fetch(baseUrl + 'api/favorites', {
        credentials: 'include',
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(favorites => {
       
        dispatch(addFavorites(favorites))})
    .catch(error => dispatch(favoritesFailed(error.message)));
}
