import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import './App.css';

import Header from 'components/Header';
import Register from 'pages/Register'
import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'
import WordListPage from 'pages/WordListPage';

import isLoggedIn from 'api/isLoggedIn'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
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
            .then(() => {
                this.setState({
                    isLoaded : true
                })
            })
    }

    render() {
        return (
            this.state.isLoaded &&
            <div className='App'>
                <Header user={{...this.state.user}} setUser={this.setUser}/>
                <Switch>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/login' >
                        <Login setUser={this.setUser} />
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
                   
                </Switch>
            </div>

        )
    }
}

export default App;
