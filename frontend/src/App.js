import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'

import { fetchUserData } from 'redux/actions'

import Header from 'components/Header';
import Register from 'pages/Register'
import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'
import WordListPage from 'pages/WordListPage';

import getUserData from 'api/getUserData'


class App extends React.Component {
    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        return (
                this.props.isLoaded &&
                <React.Fragment>
                    <Header/>
                    <main>
                        <Switch>
                            <Route path='/register'>
                                <Register />
                            </Route>
                            <Route path='/login' >
                                <Login />
                            </Route>
                            
                            <Route path='/dashboard/wordlist/:wordListId' component={WordListPage} />

                            
                            <Route path='/dashboard'>
                                {
                                    this.props.user.isLoggedIn ?
                                        <Dashboard /> :
                                        <Redirect to='/login' />
                                }
                            </Route>
                        </Switch>
                    </main>
                </React.Fragment>
                
        )
    }
}

const mapStateToProps = state => ({
    isLoaded : state.isLoaded,
    user: {
        isLoggedIn: state.user.isLoggedIn
    }
})

const mapDispatchToProps = dispatch => ({
    onLoad() {
        getUserData()
            .then(user => {
                // console.log(user)
                dispatch(fetchUserData(user))
            })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
