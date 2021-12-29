import React from 'react';
// import { Loading } from './LoadingComponent';
// import { baseUrl } from '../shared/baseUrl';
// import { FadeTransform } from 'react-animation-components';
import FlightDisplay from './FightNav/FlightDisplay';
import FlightSearch from './FightNav/FlightSearchComponent';


function Home(props) {
    return (
        <>
            <FlightSearch fetchFlights={props.fetchFlights} flights={props.flights.flights} airports={props.airports} countries={props.countries}/>
            <FlightDisplay flights={props.flights}/>
        </>
    );
}

export default Home;