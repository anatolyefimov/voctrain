import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import logout from 'api/logout'

import './Header.css';

function Header(props) {
    let history = useHistory();

    function handleLogout(e) {
        e.preventDefault();
        logout()
            .then(res => props.setUser())
        
        history.push('/')
    }

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
                            <NavLink onClick={handleLogout} to='/' className='Header__link'>
                                Log out
                            </NavLink> 
                        </React.Fragment>
                    )}
                </div>
            </nav>
        </header>
    )
}



export default Header;