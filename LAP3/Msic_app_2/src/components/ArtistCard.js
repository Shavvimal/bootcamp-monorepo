import React, { useState } from 'react';
import Button from './Button';

const ArtistCard = ({ name, genre, discography }) => {
    const punctuatedName = "_.-=" + name + "=-._";
    const displaySongs = () => discography.map(x => <li> {x} </li>)
    const [liked, setSongLike] = useState(false);

    const handleLike = () => {
        setSongLike(!liked)
    }

    return (
        <div className="card">
            <h1>{punctuatedName}</h1>
            <p className="genre">Genre: {genre}</p>

            {displaySongs()}

            <Button isItLiked={liked} updateLike={handleLike} />
        </div>
    )
}

export default ArtistCard;