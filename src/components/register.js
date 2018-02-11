import React from 'react';

// components
import Landing from './landing';

const Register = () => {
    return (
        <div>
            <Landing />
            <div className="ui container">
                <form action="/register" method="POST" className="ui inverted form">
                    <div className="required field">
                    <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required autoFocus />
                    </div>
                    <div className="required field">
                    <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" require />
                    </div>
                    <div className="required field">
                    <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" require />
                    </div>
                    <button type="submit" className="fluid ui inverted black button">REGISTER</button>
                </form>
            </div>
        </div>
    )
};

export default Register;