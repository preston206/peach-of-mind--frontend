import React from 'react';

// components
import Landing from './landing';

const Login = () => {
    return (
        <div>
            <Landing />
            <form action="/login" method="POST">
                <input type="text" name="username" id="username" />
                <input type="password" name="password" id="password" />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
};

export default Login;