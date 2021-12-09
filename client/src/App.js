import { library } from '@fortawesome/fontawesome-svg-core';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { faPlaneDeparture, faPlaneArrival, faCalendarAlt,  faGlobeAmericas, faSignInAlt, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {faFulcrum} from '@fortawesome/free-brands-svg-icons';
import {ThemeProvider} from 'styled-components';

import 'tippy.js/animations/perspective.css';

import HeaderContent from './components/HeaderContent';

import React from 'react';
import FlightsSearchComponent from './components/FightNav/FlightsNav';
import NavigationComponent from './components/Navbar/Navbar';
import DisplaySearch from './components/FightNav/DisplaySearch';


library.add(faPlaneDeparture, faPlaneArrival, faCalendarAlt, faGlobeAmericas, faSignInAlt, faPlus, faMinus, faFulcrum);

function App() {
  return (
    <>
      <header className="App-header">
        <NavigationComponent/>
        <FlightsSearchComponent/>
        <DisplaySearch/>
      <HeaderContent className=""/>
      </header>
    </>  
  );
}

export default App;