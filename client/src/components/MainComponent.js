import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import FlightsSearchComponent from './components/FightNav/FlightsNav';
import NavigationComponent from './components/Navbar/Navbar';
import DisplaySearch from './components/FightNav/DisplaySearch';

import { fetchCountries, fetchAirports } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
    return{
        airports : state.airports,
        countries : state.countries
    }
}
//you can set this up as a function, or as an object... remember that this is the only way to map dispatch to props in react, this is only required when using redux with react....
const mapDispatchToProps = {
    // postComment: (campsiteId, rating, author, text) => (postComment(campsiteId, rating, author, text)),
    fetchAirports: () => (fetchAirports()),
    //resetFeedbackForm: () => (actions.reset('feedbackForm')),
    fetchCountries: () => (fetchCountries())
};

class Main extends Component {
    //when you render this main component, wait for the component to mount on to the DOM, when it does, go ahead and fetch the information form the database
    componentDidMount() {
        this.props.fetchAirports();
        this.props.fetchCountries();
    }

    render() {
        <header className="App-header">
            <NavigationComponent/>
            <FlightsSearchComponent/>
            <DisplaySearch/>
        </header>
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
