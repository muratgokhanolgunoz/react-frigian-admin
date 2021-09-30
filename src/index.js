import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider';
import App from './App';
import { history } from './helpers/history';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/" history={history}>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);