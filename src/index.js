import 'babel-polyfill'; // Transpiles non standard ES6 features: should use individual ones being used rather than this blanket polyfill
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

// We can pass in initialState from api call or localStorage here,
// otherwise set initialState in reducers
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
