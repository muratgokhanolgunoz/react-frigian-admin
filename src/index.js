import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Provider from './context/Provider';
import App from './App';
import { history } from './helpers/history';
import FirmProvider from './context/FirmProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/" history={history}>
      <Provider>
        <FirmProvider>
          <App />
        </FirmProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);