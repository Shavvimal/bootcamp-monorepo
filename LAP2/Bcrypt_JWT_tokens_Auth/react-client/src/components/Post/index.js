import React from 'react';

const Post = ({ post: {username, body} }) => {
    return (
        <div className='post'>
            <h3>{username}</h3>
            <p>{body}</p>
        </div>
    );
}

export default Post;
