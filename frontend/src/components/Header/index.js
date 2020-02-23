import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <header className='Header'>
            <nav className='Header__nav'>
                <NavLink to='/' className='Header__logo'>
                    V
                </NavLink>
                <div className='Header__menu'>
                    <NavLink to='/login' className='Header__link'>
                        Sign in
                    </NavLink>
                    <NavLink to='/register' className='Header__link'>
                        Register
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;