import React from 'react';
import { Link } from 'react-router-dom';
// import peach from '../../public/IMG/peachImage.png';
import peach from '../IMG/peachImage.png';

const Nav = () => {
    return (
        <header>
            <img id="logo" src={peach} alt="Peach of Mind Logo" />
            <h1 id="nav-header">Peach of Mind</h1>
            <nav>
                <a href="#" id="menu-icon">&#9776;</a>
                <ul>
                    <li><a href="#">Logout</a></li>
                    <li><a href="#">Profile Manager</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;