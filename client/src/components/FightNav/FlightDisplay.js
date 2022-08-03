
import { Loading } from '../LoadingComponent';
import {Row, Col, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { postFavorite, flights} from '../../redux/actionCreators';
import {useDispatch, useEffect, useSelector} from 'react-redux'
import SingleFlightDisplay from './SingleFlightDisplay';
import {fetchFavorites, deleteFavorite } from '../../redux/actionCreators'
import { useState } from 'react';

function FlightDisplay() {
    //useauth
    //list of components
    const flights = useSelector(state => state.flights)

    const flightsList = flights.flights.map(flight => {
        return (
            <SingleFlightDisplay key={flight.fa_flight_id} flight={flight}/>
        );
    });
   
   if (flights.isLoading) {
        return (
            <div className='container main-box'>
                <Loading/>
            </div>
        );
    }

    if (flights.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col header-main text-center'>
                        <h4 className='text-primary'>No flights found </h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        flights.flights.length ? 
        <div className='container main-box'>
            {flightsList}
        </div> : 
        <></>
    );
}

export default FlightDisplay;