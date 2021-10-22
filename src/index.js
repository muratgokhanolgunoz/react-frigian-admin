import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from './helpers/history';
import App from './App';
import Provider from './context/Provider';
import FirmProvider from './context/FirmProvider';

ReactDOM.render(
  <StrictMode>
    <Router basename="/" history={history}>
      <Provider>
        <FirmProvider>
          <App />
        </FirmProvider>
      </Provider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);