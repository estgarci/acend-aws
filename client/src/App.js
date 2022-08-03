import { library } from '@fortawesome/fontawesome-svg-core';
import { Component } from 'react';
// import GlobalStyle from './globalStyles';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { faPlaneDeparture, faPlaneArrival, faCalendarAlt,  faGlobeAmericas, faSignInAlt, faSignOutAlt, faPlus, faMinus, faLevelUpAlt, faShoppingCart, faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';
import {faFulcrum} from '@fortawesome/free-brands-svg-icons';
// import {ThemeProvider} from 'styled-components';

import 'tippy.js/animations/perspective.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {BrowserRouter, Router} from 'react-router-dom';
import Main from './components/MainComponent';
import Signup from './components/Signup'

library.add(faThumbsUp, faPlaneDeparture, faPlaneArrival, faCalendarAlt, faGlobeAmericas, faSignInAlt, faPlus, faMinus, faFulcrum, faLevelUpAlt, faShoppingCart, faSignOutAlt, faHeart);

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <BrowserRouter >
            < Main/>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;