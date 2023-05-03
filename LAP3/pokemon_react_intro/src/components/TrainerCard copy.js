import React, { useState } from 'react';

const TrainerCard = ({ name, num }) => {
    const [ pokemonCount, setPokemonCount ] = useState(num);

    const excitedName = name.toUpperCase() + "!";

    const catchAPokemon = () => {
        let newCount = pokemonCount + 1;
        setPokemonCount(newCount);
    }

    return (
        <>
            <h1>Welcome {excitedName}</h1>
            <p>You started with {num}</p>
            <p>Now you have {pokemonCount} pokemon!</p>
            <button onClick={catchAPokemon}>Catch a Pokemon</button>
        </>
    )
}

export default TrainerCard;