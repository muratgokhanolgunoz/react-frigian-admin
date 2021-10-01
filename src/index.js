import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Provider from './context/Provider';
import App from './App';
import { history } from './helpers/history';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/" history={history}>
      <Provider>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);