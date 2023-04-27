import React, { Fragment } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Fragment>
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/login' Component={Login} />
                <Route path='/signup' Component={SignUp} />
                <Route path='/dashboard' Component={Dashboard} />
            </Routes>
        </BrowserRouter>
    </Fragment>
  )
}

export default App