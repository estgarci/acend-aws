import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Component } from 'react';
// import GlobalStyle from './globalStyles';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { faPlaneDeparture, faPlaneArrival, faCalendarAlt,  faGlobeAmericas, faSignInAlt, faPlus, faMinus, faLevelUpAlt} from '@fortawesome/free-solid-svg-icons';
import {faFulcrum} from '@fortawesome/free-brands-svg-icons';
// import {ThemeProvider} from 'styled-components';

import 'tippy.js/animations/perspective.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

library.add(fas, fab);

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;