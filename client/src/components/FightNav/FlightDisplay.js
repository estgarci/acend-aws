
import { Loading } from '../LoadingComponent';
import {useSelector} from 'react-redux'
import SingleFlightDisplay from './SingleFlightDisplay';
import {Col, Row} from 'reactstrap'

function FlightDisplay() {

    const flights = useSelector(state => state.flights)

    const flightsList = flights.flights.map(flight => {
        return (
            <SingleFlightDisplay key={flight.fa_flight_id} flight={flight}/>
        );
    });
   
   if (flights.isLoading) {
        return (
            <div className='container main-box mt-4'>
                <Loading className=''/>
            </div>
        );
    }

    if (flights.errMess) {
        return (
            <div className='container main-box text-center mt-4'>
                No flights found, try a popular airport. For example: PHX and LAX
            </div>
        );
    }

    return (
        flights.flights.length ? 
        <div className='container main-box mt-4'>
            {flightsList}
        </div> : 
        <></>
    );
}

export default FlightDisplay;