import { library } from '@fortawesome/fontawesome-svg-core';
import { Component } from 'react';
// import GlobalStyle from './globalStyles';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { faPlaneDeparture, faPlaneArrival, faCalendarAlt,  faGlobeAmericas, faSignInAlt, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {faFulcrum} from '@fortawesome/free-brands-svg-icons';
// import {ThemeProvider} from 'styled-components';

import 'tippy.js/animations/perspective.css';

import HeaderContent from './components/HeaderContent';

import React from 'react';
// import FlightsSearchComponent from './components/FightNav/FlightsNav';
// import NavigationComponent from './components/Navbar/Navbar';
// import DisplaySearch from './components/FightNav/DisplaySearch';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import Main from './components/MainComponent';

library.add(faPlaneDeparture, faPlaneArrival, faCalendarAlt, faGlobeAmericas, faSignInAlt, faPlus, faMinus, faFulcrum);

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;