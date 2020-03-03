import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'

import store from 'redux/store'
import { fetchUserData } from 'redux/actions'

import Header from 'components/Header';
import Register from 'pages/Register'
import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'
import WordListPage from 'pages/WordListPage';

import getUserData from 'api/getUserData'

import './App.css';


class App extends React.Component {

    componentDidMount() {
        getUserData()
            .then(user => {
                console.log(user)
                store.dispatch(fetchUserData(user))
            })
    }

    render() {
        return (

            <div className='App'>
                <h1>Hello!!!</h1>
                <Header/>
                {/* <Switch>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/login' >
                        <Login />
                    </Route>
                    
                    <Route path='/dashboard/wordlist/:wordListId'>
                        <WordListPage />
                    </Route>  
                    
                    <Route path='/dashboard'>
                        {
                            this.state.user.isLoggedIn ?
                                <Dashboard user={this.state.user} /> :
                                <Redirect to='/login' />
                        }
                    </Route>
                   
                </Switch> */}
            </div>

        )
    }
}



export default connect()(App);
