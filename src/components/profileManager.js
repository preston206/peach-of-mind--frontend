import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import Nav from './nav';

const ProfileManager = () => {
    return (
        <div>
            <Nav />
            <div className="ui center aligned container pad-8em">
                <h1 id="profile-manager-header">Profile Manager</h1>
                <p>Select a profile</p>

                <div id="profile-buttons-container">
                    <button type="button" className="massive fluid ui black button">Add Child +</button> <br />
                    <Link to="/parent/child/9090">
                        <button type="button" className="massive fluid ui black button">Anthony</button> <br />
                    </Link>
                    <button type="button" className="massive fluid ui black button">Rachel</button> <br />
                    <button type="button" className="massive fluid ui black button">Mark</button> <br />
                    <button type="button" className="massive fluid ui black button">Martin</button> <br />
                    <button type="button" className="massive fluid ui black button">Lindsey</button> <br />
                    <button type="button" className="massive fluid ui black button">Nick</button>
                </div>
            </div>
        </div>
    )
};

// export default ProfileManager;

function mapStateToProps(state) {
    return {
        data: state.children
    }
};

export default connect(mapStateToProps)(ProfileManager);