/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import Context from './context/Context';
import Login from './components/layouts/auth/Login';
import Dashboard from './components/layouts/dashboard/Dashboard';
import Sidebar from './components/layouts/dashboard/sidebar/Sidebar';
import Main from './components/layouts/dashboard/main/Main';
import { checkToken } from './helpers/checkToken';
import { getMapData } from './helpers/mapData';
import { ToastContainer } from 'react-toastify';
import './assets/css/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import './assets/js/script.js';

const App = () => {
  const context = useContext(Context)

  useEffect(() => {
    if (checkToken.check(context.token)) {
      getMapData(context)
      setInterval(() => {
        getMapData(context)
      }, 30000)
    }
  }, [context.token]);

  useEffect(() => {
    if (checkToken.check(context.token)) {
      window.onresize = windowResize;
    }
  });

  const windowResize = () => {
    if (window.innerWidth >= 1200) {
      context.funcHandleSetMapZoom(6.8);
      document.getElementById("sidebar").setAttribute("style", "display: block !important");
      document.getElementById("sidebar-toggle-open").setAttribute("style", "display: none !important");
      document.getElementById("sidebar-toggle-close").setAttribute("style", "display: none !important");
      document.getElementById("nav").setAttribute("style", "display: block !important");
      document.getElementById("nav-toggle-open").setAttribute("style", "display: none !important");
      document.getElementById("nav-toggle-close").setAttribute("style", "display: none !important");
    } else {
      context.funcHandleSetMapZoom((window.innerWidth / window.innerHeight) * 4);
      document.getElementById("sidebar").setAttribute("style", "display: none !important");
      document.getElementById("sidebar-toggle-open").setAttribute("style", "display: block !important");
      document.getElementById("sidebar-toggle-close").setAttribute("style", "display: block !important");
      document.getElementById("nav").setAttribute("style", "display: none !important");
      document.getElementById("nav-toggle-open").setAttribute("style", "display: block !important");
      document.getElementById("nav-toggle-close").setAttribute("style", "display: block !important");
    }
  }

  return (
    <section className="page-padding">
      {!checkToken.check(context.token)
        ? <Login />
        : <Dashboard left={<Sidebar />} right={<Main />} />
      }
      <ToastContainer />
    </section>
  );
}

export default App;