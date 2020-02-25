import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import Header from 'components/Header';
import Register from 'pages/Register'
import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'

import getUserData from 'api/getUserData'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                isLoggedIn: false,
                data: {
                    username: ''
                }
            }
        }

        this.setUser = this.setUser.bind(this)
    }

    setUser() {
        getUserData()
            .then(user => {
                this.setState({user: user})
            }) 
    }

    componentDidMount() {
        this.setUser()
    }

    render() {
        return (
            <div className='App'>
                <Header user={{...this.state.user}} setUser={this.setUser}/>
                <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/login' >
                    <Login setUser={this.setUser} />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard user={{...this.state.user}} />
                </Route>
            </div>
        )
    }
}

export default App;
