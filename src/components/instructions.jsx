import React from 'react';
import { connect } from 'react-redux';

// importing image
import peach from '../IMG/peachImage.png';

const Instructions = () => {
    return (
        <div>
            <header>
                <img id="logo-demo" src={peach} alt="Peach of Mind Logo" />
                <h1 id="nav-header-demo">Peach of Mind</h1>
            </header>

            <div className="ui center aligned container" id="instructions-container">
                <div className="ui left aligned inverted segment" id="instructions">
                    <h1>How to demo this app</h1>
                    <p>If you don't want to read instructions, you can get started by <a href='/register'>registering</a> a new account and start clicking around.</p>
                    
                    <p>1) Or, login with the following creds:</p>
                    <span>Username: peter</span><br />
                    <span>Password: griffen99</span><br />
                    <span>(credentials are case sensitive)</span>
                    <br /><br />

                    <p>2) Then, you can:</p>
                    <span>add a new child profile...</span><br />
                    <span>add allergens to any of the child profiles...</span><br />
                    <span>edit, delete, or sort allergens...</span>
                    <p>Then, when finished you can logout.</p>
                    <p>Links:<br />
                        <a href='/register'>register</a><br />
                        <a href='/login'>login</a>
                    </p>
                </div>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        parent: state.children
    }
};

export default connect(mapStateToProps)(Instructions);