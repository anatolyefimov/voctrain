import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import './App.css';

import Header from 'components/Header';
import Register from 'pages/Register'
import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'

import isLoggedIn from 'api/isLoggedIn'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                isLoggedIn: false,
                username: ''
            }
        }

        this.setUser = this.setUser.bind(this)
    }

    setUser() {
        return isLoggedIn()
            .then(user => {
                this.setState({user: user})
                return user
            }) 

    }

    componentDidMount() {
        this.setUser()
    }

    render() {
        console.log(this.state.user.isLoggedIn)
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
                    {
                        this.state.user.isLoggedIn ?
                            <Dashboard user={this.state.user} /> :
                            <Redirect to='/login' />
                    }
                </Route>
            </div>
        )
    }
}

export default App;
