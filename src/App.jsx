import React, { Fragment } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Fragment>
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/login' Component={Login} />
                <Route path='/signup' Component={SignUp} />
            </Routes>
        </BrowserRouter>
    </Fragment>
  )
}

export default App