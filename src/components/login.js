import React from 'react';

// components
import Landing from './landing';

const Login = () => {
    return (
        <div>
            <Landing />

            <div className="ui container">
                <form action="/login" method="POST" className="ui inverted form">
                    <div className="required field">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" require />
                    </div>
                    <div className="required field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" require />
                    </div>
                    <button type="submit" className="fluid ui inverted black button">LOGIN</button>
                </form>
            </div>
        </div>
    )
};

export default Login;