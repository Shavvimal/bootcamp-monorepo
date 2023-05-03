import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jokes = () => {
    const [ joke, setJoke ] = useState();

    useEffect(() => {
        async function tellMeAJoke() {
            try {
                let { data } = await axios.get('https://official-joke-api.appspot.com/random_joke')
                setJoke(data);
            } catch (err) {
                setJoke({setup: "What's worse than a bad joke?", punchline: "No jokes..."})
            }
        }

        tellMeAJoke()
        const stream = setInterval(tellMeAJoke, 10000)

        return () => clearInterval(stream)
    }, [])


    return (
        <>
        <h1>Jokes</h1>
        <div style={{width: "100%", textAlign: "center"}}>
            { joke ?
                <>
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
                </>
            : <h2>Jokes are on their way!</h2> }
        </div>
        </>
    )
}

export default Jokes;