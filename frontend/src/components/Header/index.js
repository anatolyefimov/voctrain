import React from 'react';
import { NavLink   } from 'react-router-dom';
import { connect } from 'react-redux'

import logout from 'api/logout'

import initialState from 'redux/state'
import { fetchUserData } from 'redux/actions'

import './Header.css';


function Header(props) {

    return (
        <header className='Header'>
            <nav className='Header__nav'>
                <NavLink to='/' className='Header__logo'>
                    voctrain
                </NavLink>
                <div className='Header__menu'>
                    {!props.user.isLoggedIn ?  (
                        <React.Fragment>
                            <NavLink to='/login' className='Header__link'>
                                Sign in
                            </NavLink>
                            <NavLink to='/register' className='Header__link'>
                                Register
                            </NavLink> 
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <NavLink to='/dashboard' className='Header__link'>
                                {props.user.username}
                            </NavLink>
                            <NavLink onClick={props.handleLogout} to='/' className='Header__link'>
                                Log out
                            </NavLink> 
                        </React.Fragment>
                    )}
                </div>
            </nav>
        </header>
    )
}

const mapStateToProps = state => ({
    user: {
        username: state.user.username,
        isLoggedIn: state.user.isLoggedIn
    }
})

const mapDispatchToProps = dispatch => ({
    handleLogout(e) {
        e.preventDefault()

        logout()
            .then(() => { dispatch(fetchUserData(initialState.user)) })
                
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);