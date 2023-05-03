import React, { useState } from 'react';
import ArtistCard from './components/ArtistCard';
import Button from './components/Button';
import './App.css';



const App = () => {
    const [trainers, setTrainers] = useState([
            {name: "The 1975", genre: "Alternative/Indie", discography:           ["The 1975", "Love Me","Ugh!","A Change of Heart","She's American","If I Believe You","Please Be Naked","Lostmyhead","The Ballad of Me and My Brain","Somebody Else","Loving Someone","I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It","The Sound","This Must Be My Dream","Paris","Nana","She Lays Down"]
               },
            { name: "Croosh", genre: "Hip-Hop/Rap/Alternative", discography: 
                ["Woah", "Zeus","Numb","RIP","Vibrations","I Need","Way Out - Single","Crazy Virgo","SoSoSo","Decision - Single","You Tell Me","Smile","Around","Dark & Stormy - Single","Crazy Virgo","Glitz","Strange (feat. A-Ru$$) - Single","Blessed - Single","Alive (feat. Matt Burton)","Fibonacci","My Way - Single","Pride","Saiyan - Single","Pull Up","Queen - Single","Crazy Virgo","Mind"]
              },
            { name: "Post Malone", genre: "Hip-Hop/Rap", discography: 
                ["Paranoid", "Spoil My Night","Rich & Sad","Zack and Codeine","Takin' Shots","Rockstar","Over Now","Psycho","Better Now","Ball for Me","Otherside","Stay","Blame It on Me","Same Bitches","Jonestown","92 Explorer","Candy Paint","Sugar Wraith"]
               }
    ])
    
    const renderArtistCards = () => trainers.map((t, i) => <ArtistCard key={i} name={t.name} genre={t.genre} discography={t.discography} />)

    return (
        <>
            {renderArtistCards()}
        </>
    )
};

export default App;