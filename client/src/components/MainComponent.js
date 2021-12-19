import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapDispatchToProps = {
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
