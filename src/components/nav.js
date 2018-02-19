import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ReactModal from 'react-modal';

// importing image
import peach from '../IMG/peachImage.png';

class Nav extends React.Component {

    state = {
        showModal: false
    };

    onSubmit(values) {
        console.log(values);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <header>
                <img id="logo" src={peach} alt="Peach of Mind Logo" />
                <h1 id="nav-header">Peach of Mind</h1>
                <nav>
                    <a href="#" id="menu-icon">&#9776;</a>
                    <ul>
                        <li><a href="#" onClick={event => this.handleOpenModal(event)}>Edit Child's Name</a></li>
                        <li><Link to={`/profilemgr/${this.props.pid}`}>Profile Manager</Link></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </nav>
                <div>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="add or edit child profile"
                        className="edit-modal"
                    >
                        <button
                            type="button"
                            className="circular ui icon button"
                            onClick={event => this.handleCloseModal(event)
                            }>
                            <span className="profile-form-close-button">X</span>
                        </button>
                        <form
                            className="ui big inverted form edit-profile-form"
                            action="/parent/child/:id"
                            method="POST"
                            onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                            )}>
                            <div className="field">
                                <label htmlFor="child-name-input">Name:</label>
                                <Field component="input" type="text" name="childName" id="child-name-input" />
                            </div>
                            <button type="submit" className="fluid ui green button">UPDATE</button>
                        </form>
                    </ReactModal>
                </div>
            </header>
        )
    }
};



// export default Nav;

function mapStateToProps(state) {
    return {
        parent: state.children
    }
};

Nav = reduxForm({
    form: 'navForm',
    enableReinitialize: true
})(Nav);

export default connect(mapStateToProps)(Nav);