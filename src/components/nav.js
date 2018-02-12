import React from 'react';
import { Link } from 'react-router-dom';
import peach from '../IMG/peachImage.png';

const Nav = () => {
    return (
        <header>
            <img id="logo" src={peach} alt="Peach of Mind Logo" />
            <nav>
                <a href="#" id="menu-icon">&#9776;</a>
                <ul>
                    <li><a href="#">Menu Link</a></li>
                    <li><a href="#">Menu Link</a></li>
                    <li><a href="#">Menu Link</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;