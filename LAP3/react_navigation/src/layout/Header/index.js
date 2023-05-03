import React from 'react';
import { NavLink } from 'react-router-dom';

import { BackButton } from '../../components';
import './style.css'

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/about" activeClassName="current">About</NavLink>
            <NavLink to="/news" activeClassName="current">News</NavLink>
            <NavLink to="/jokes" activeClassName="current">Jokes</NavLink>
            <BackButton />
        </nav>
    );
}

export default Header;
