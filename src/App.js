/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, Fragment } from 'react';
import Context from './context/Context';
import MapApi from './services/MapServices';
import Main from './components/layouts/Main';
import Sidebar from './components/layouts/Sidebar';

import './assets/css/style.css';
import './assets/js/script.js';
import Login from './components/layouts/auth/Login';
import { checkToken } from './helpers/checkToken';

const App = () => {
  let mapApi = new MapApi();
  const context = useContext(Context)

  useEffect(() => {
    if (checkToken.check(context.token)) {
      getMapData()
      setInterval(() => {
        getMapData()
      }, 30000)
    }
  }, [context.token]);

  const getMapData = () => {
    mapApi.getFirmList()
      .then((response) => {
        context.funcHandleSetFirms(response.data.firms);
        context.funcHandleSetFeeds(response.data.feeds);
        context.funcHandleSetFiles(response.data.files);
      })
      .catch(() => console.warn("An error occured when fetching current firm & feed informations."));
  }

  return (
    <section>
      {
        !checkToken.check(context.token)
          ? <Login />
          : (
            <Fragment>
              <Sidebar />
              <Main />
            </Fragment>
          )
      }
    </section>
  );
}

export default App;