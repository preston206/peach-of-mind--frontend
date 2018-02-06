import React from 'react';

// components
import Nav from './nav';

const ProfileManager = () => {
    return (
        <div>
            <Nav />
            <div>
                <h1>Profile Manager</h1>
                <p>Select a profile</p>
                <button type="button">Add Child</button> <br />
                <div id="profile-buttons">
                    <button type="button">Anthony's profile</button> <br />
                    <button type="button">Rachel's profile</button> <br />
                    <button type="button">Nick's profile</button>
                </div>
            </div>
        </div>
    )
};

export default ProfileManager;