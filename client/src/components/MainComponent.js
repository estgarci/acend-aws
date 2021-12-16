import React, { Component } from 'react';

import { connect } from 'react-redux';

// import FlightsSearchComponent from './components/FightNav/FlightsNav';
// import NavigationComponent from './components/Navbar/Navbar';

import FlightSearch from './FightNav/FlightSearchComponent';
import Navbar from './Navbar/Navbar';
import FlightDisplay from './FightNav/FlightDisplay';
import { fetchCountries, fetchAirports, fetchFlights } from '../redux/actionCreators';


const mapStateToProps = state => {
    return{
        airports : state.airports,
        countries : state.countries,
        flights: state.flights
    }
}
//you can set this up as a function, or as an object... remember that this is the only way to map dispatch to props in react, this is only required when using redux with react....
const mapDispatchToProps = {
    // postComment: (campsiteId, rating, author, text) => (postComment(campsiteId, rating, author, text)),
    fetchAirports: () => (fetchAirports()),
    //resetFeedbackForm: () => (actions.reset('feedbackForm')),
    fetchCountries: () => (fetchCountries()),
    fetchFlights: query => (fetchFlights(query))
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchAirports();
        this.props.fetchCountries();
    }

    render() {
        return(
        <header className="App-header">
            <Navbar/>
            <FlightSearch fetchFlights={this.props.fetchFlights} flights={this.props.flights.flights} airports={this.props.airports.airports} countries={this.props.countries.countries}/>
            <FlightDisplay flights={this.props.flights}/>
        </header>)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
