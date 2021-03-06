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
  
export const receiveLogin = response => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: response.token
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
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'api/users/login', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
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
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            // dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
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

// Logs the user out
export const logoutUser = () => dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    // dispatch(favoritesFailed('Error 401: Unauthorized'));
    dispatch(receiveLogout())
}

// FACEBOOK AUTH
export const facebookLoginUser = creds => dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))
    return fetch( baseUrl + 'api/users/facebook/token', {
        headers : { 
            'Authorization' :  'Bearer ' + creds.accessToken
        }
    })
    .then(response => {
            if (response.ok) {
                console.log('response from users/facebook/toke was okay this is the RESPONSE:', response)
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
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            // dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
        } else {
            const error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

// //handle login and authentication
// export const facebookRequestLogout = () => {
//     return {
//         type: actionTypes.LOGOUT_REQUEST
//     }
// }
  
// export const facebookReceiveLogout = () => {
//     return {
//         type: actionTypes.LOGOUT_SUCCESS
//     }
// }

// // Logs the user out
// export const facebookLogoutUser = () => dispatch => {
//     dispatch(requestLogout())
//     localStorage.removeItem('token');
//     localStorage.removeItem('creds');
//     // dispatch(favoritesFailed('Error 401: Unauthorized'));
//     dispatch(receiveLogout())
// }

// github AUTH
export const githubLoginUser = code => dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    
    dispatch(githubRequestLogin(code))
    return fetch( baseUrl + `api/users/github/token?code=${code}`)
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
            // If login was successful, set the token in local storage
            console.log(response.profile)
            
            // Dispatch the success action
            // dispatch(fetchFavorites());
            dispatch(githubRecieveLogin(response.profile));
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', response.profile);
        } else {
            const error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

//handle login and authentication for github only because of their code-bearer-token strategy

export const githubRequestLogin = code => {
    return {
        type: actionTypes.GITHUB_LOGIN_REQUEST,code
    }
}
  
export const githubRecieveLogin = profile => {
    return {
        type: actionTypes.GITHUB_LOGIN_SUCCESS,
        profile
    }
}


// // Logs the user out
// export const githubLogoutUser = () => dispatch => {
//     dispatch(requestLogout())
//     localStorage.removeItem('token');
//     localStorage.removeItem('creds');
//     // dispatch(favoritesFailed('Error 401: Unauthorized'));
//     dispatch(receiveLogout())
// }


