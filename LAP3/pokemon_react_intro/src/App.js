import React, { useState } from 'react';
import PokemonIndex from './components/PokemonIndex';
import TrainerCard from './components/TrainerCard';

const App = () => {
    const [trainers, setTrainers] = useState([
            { name: "Sammie", num: 12 },
            { name: "Aki", num: 42 },
            { name: "Bob", num: 90 }
    ])
    
    const renderTrainerCards = () => trainers.map((t, i) => <TrainerCard key={i} name={t.name} num={t.num} />)

    return (
        <>
            <PokemonIndex />
            {renderTrainerCards()}
        </>
    )
};

export default App;