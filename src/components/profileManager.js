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
                <button type="button">Add Child</button>
                <div id="profile-buttons">
                    <button type="button">placeholder profile button</button>
                </div>
            </div>
        </div>
    )
};

export default ProfileManager;