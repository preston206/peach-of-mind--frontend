import React from 'react';

// components
import Landing from './landing';

const Register = () => {
    return (
        <div>
            <Landing />
            <form action="/register" method="POST">
                <input type="email" name="email" id="email" /> <br />
                <input type="text" name="username" id="username" /> <br />
                <input type="password" name="password" id="password" /> <br />
                <button type="submit">REGISTER</button>
            </form>
        </div>
    )
};

export default Register;