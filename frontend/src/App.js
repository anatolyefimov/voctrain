import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import Header from 'components/Header';
import Register from 'pages/Register'

function App() {
    return (
        <div className='App'>
            <Header />
            <Route path='/register'>
                    <Register />
            </Route>
        </div>
    );
}

export default App;
