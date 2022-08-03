


import { Loading } from './LoadingComponent';
import { useSelector} from 'react-redux';
import SingleFlightDisplay from './FightNav/SingleFlightDisplay';
import { useEffect } from 'react';
import {useAuth} from '../hooks/useAuth';
function Mytrips() {
    
    const favoriteFlights = useSelector(state => state.favorites)

    const flightsList = favoriteFlights.favorites.map(flight => {
        return (
            <SingleFlightDisplay key={flight.fa_flight_id} flight={flight} isFavorite={true}/>
        );
    });
   
   if (favoriteFlights.isLoading) {
        return (
            <div className='container main-box'>
                <Loading/>
            </div>
        );
    }

    if (favoriteFlights.errMess) {
        return (
            <div className='container text-center main-box'>
                <h4 className='text-primary'>You havent saved any flights </h4>
            </div>
        );
    }

    return (
        favoriteFlights.favorites.length > 0 ? 
        <>
        <div className='container text-center main-box'>
            <h1>Your saved flights</h1>
            {flightsList}
        </div></>: 
        <div className='container main-box text-center'>
            <h1>No flights favorited</h1>
        </div>
    );
}

export default Mytrips;