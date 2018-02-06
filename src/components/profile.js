import React from 'react';

// components
import Nav from './nav';

const Profile = () => {
    return (
        <div>
            <Nav />
            <div id="profile-container">
                <h1>Anthony</h1>
                <div id="allergies">
                    <div>
                        Allergen1
                        </div>
                    <div>
                        Allergen2
                        </div>
                    <div>
                        Allergen3
                        </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;