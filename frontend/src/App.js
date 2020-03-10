import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { fetchUserData } from 'redux/actions'

import PrivateRoute from 'components/PrivateRoute'
import Header from 'components/Header';
import Register from 'pages/Register'
import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'
import WordListPage from 'pages/WordListPage';
import WordListTrain from 'pages/WordListTrain'

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
                            <Route exact path='/register'>
                                <Register />
                            </Route>
                            <Route exact path='/login' >
                                <Login />
                            </Route>

                            <PrivateRoute exact path='/dashboard/wordlist/:wordListId/train'  component={WordListTrain}  isAuth={this.props.user.isLoggedIn} />
                            <PrivateRoute exact path='/dashboard/wordlist/:wordListId'  component={WordListPage}  isAuth={this.props.user.isLoggedIn} />
                            <PrivateRoute exact path='/dashboard' component={Dashboard} isAuth={this.props.user.isLoggedIn} />
                        
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
