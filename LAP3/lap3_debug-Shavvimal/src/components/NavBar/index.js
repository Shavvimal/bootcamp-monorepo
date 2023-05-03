import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    const history = useHistory();

    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/search">Search</NavLink>
            <button id="backBtn" onClick={history.goBack} style={{cursor: "pointer"}} >Back</button>
        </nav>
    );
}

export default NavBar;
