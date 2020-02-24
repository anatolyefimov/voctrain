import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import Header from 'components/Header';
import Register from 'pages/Register'
import Login from 'pages/Login'

function App() {
    return (
        <div className='App'>
            <Header />
            <Route path='/register'>
                    <Register />
            </Route>
            <Route path='/login'>
                    <Login />
            </Route>
        </div>
    );
}

export default App;
