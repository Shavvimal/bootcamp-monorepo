import React from 'react';

const Button = (props) => {
    return (
            <button className={props.isItLiked ? 'song-liked' : ''} onClick={() => props.updateLike()}>
        
            {props.isItLiked ? 'Unlike' : 'Like'}
        
            </button> 
    )
}

export default Button;