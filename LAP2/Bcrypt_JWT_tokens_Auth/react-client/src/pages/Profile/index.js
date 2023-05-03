import React from 'react';

const Profile = ({ user }) => {
    return (
        <div>
            <h3>Hi there, {user.username}</h3>
            <p>How's the day going?</p>
        </div>
    );
}

export default Profile;
