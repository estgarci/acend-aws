import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './css/index.css';
// import "tippy.js/dist/svg-arrow.css";

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
