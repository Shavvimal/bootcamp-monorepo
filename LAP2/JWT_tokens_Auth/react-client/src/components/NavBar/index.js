import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ isLoggedIn, logout }) => {
    return (
        <nav>
            { !isLoggedIn ?
                <>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
                </>
                : 
                <>
                <NavLink to='/feed'>Feed</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <button onClick={logout}>Logout</button>
                </>
            }
        </nav>

    );
}

export default NavBar;
