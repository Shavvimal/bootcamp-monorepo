import React, { useState, useEffect } from 'react';
import './style.css';

function SearchForm({ getResult }) {

    const [ location, setLocation ] = useState("London")
    // useEffect(() => getResult(location), [])
    const handleSubmit = e => {
        e.preventDefault();
        getResult(location);
    }

    const updateInput = e => {
        const input = e.target.value 
        setLocation(input)
    }


    return (
        <form onSubmit={handleSubmit} aria-label="form">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" placeholder="London" onChange={updateInput}/>
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;
