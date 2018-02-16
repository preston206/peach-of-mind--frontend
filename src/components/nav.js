import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// importing image
import peach from '../IMG/peachImage.png';

const Nav = () => {
    return (
        <header>
            <img id="logo" src={peach} alt="Peach of Mind Logo" />
            <h1 id="nav-header">Peach of Mind</h1>
            <nav>
                <a href="#" id="menu-icon">&#9776;</a>
                <ul>
                    <li><Link to="/">Profile Manager</Link></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </nav>
        </header>
    )
};

// export default Nav;

function mapStateToProps(state) {
    return {
        data: state.children
    }
};

export default connect(mapStateToProps)(Nav);