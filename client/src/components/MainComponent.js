import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlightSearch from './FightNav/FlightSearchComponent';
import Navbar from './Navbar/Navbar';
import FlightDisplay from './FightNav/FlightDisplay';
import { fetchCountries, fetchAirports, fetchFlights, loginUser, logoutUser, facebookLoginUser, githubLoginUser } from '../redux/actionCreators';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';

const mapStateToProps = state => {
    return{
        airports : state.airports,
        countries : state.countries,
        flights: state.flights,
        auth: state.auth
    }
}

const mapDispatchToProps = {
    fetchAirports: () => (fetchAirports()),
    //resetFeedbackForm: () => (actions.reset('feedbackForm')),
    fetchCountries: () => (fetchCountries()),
    fetchFlights: query => (fetchFlights(query)),
    loginUser: creds => (loginUser(creds)),
    logoutUser: () => (logoutUser()),
    facebookLoginUser: token => (facebookLoginUser(token)),
    githubLoginUser: code => (githubLoginUser(code))
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchAirports();
        this.props.fetchCountries();
    }

    render() {
        //going through the render function every time there is a change, not suitable for our search bard
        // const HomePage = () => {
            
        //     return (
        //         <Home
        //             campsite={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
        //             campsitesLoading={this.props.campsites.isLoading}
        //             campsitesErrMess={this.props.campsites.errMess}
        //             promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
        //             promotionLoading={this.props.promotions.isLoading}
        //             promotionErrMess={this.props.promotions.errMess}
        //             partner={this.props.partners.partners.filter(partner => partner.featured)[0]}
        //             partnerLoading={this.props.partners.isLoading}
        //             partnerErrMess={this.props.partners.errMess}
        //         />
        //     );
        // }
        return(
        <header className="App-header">
            <Navbar githubLoginUser={this.props.githubLoginUser} facebookLoginUser={this.props.facebookLoginUser} auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser}/>
            <Home fetchFlights={this.props.fetchFlights} flights={this.props.flights} airports={this.props.airports} countries={this.props.countries}/>
        </header>)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
