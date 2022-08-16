import { library } from '@fortawesome/fontawesome-svg-core';
import { Component } from 'react';
// import GlobalStyle from './globalStyles';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { faPlaneDeparture, faPlaneArrival, faCalendarAlt,  faGlobeAmericas, faSignInAlt, faSignOutAlt, faPlus, faMinus, faLevelUpAlt, faShoppingCart, faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faFulcrum, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import {ThemeProvider} from 'styled-components';

import 'tippy.js/animations/perspective.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';

//adding a library supports "tree shaking", getting rid of anything that is not being used in your could
library.add(faTwitter, faThumbsUp, faPlaneDeparture, faPlaneArrival, faCalendarAlt, faGlobeAmericas, faSignInAlt, faPlus, faMinus, faFulcrum, faLevelUpAlt, faShoppingCart, faSignOutAlt, faHeart, faGithub, fab);

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