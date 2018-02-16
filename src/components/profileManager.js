import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ReactModal from 'react-modal';

// components
import Nav from './nav';

class ProfileManager extends React.Component {

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
            <div>
                <Nav />
                <div className="ui center aligned container pad-8em">
                    <h1 id="profile-manager-header">Profile Manager</h1>
                    <p>Select a profile</p>

                    <div id="profile-buttons-container">
                        <button
                            type="button"
                            className="massive fluid ui black button"
                            onClick={event => this.handleOpenModal(event)
                            }>
                            Add Child +
                        </button> <br />
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
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="add or edit child profile"
                    className="add-modal"
                >
                    <button
                        type="button"
                        className="circular ui icon button"
                        onClick={event => this.handleCloseModal(event)
                        }>
                        <span className="profile-form-close-button">X</span>
                    </button>
                    <form
                        className="ui big inverted form add-profile-form"
                        action="/parent/child/:id"
                        method="POST"
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                        )}>
                        <div className="field">
                            <label htmlFor="allergen-input">Name:</label>
                            <Field component="input" type="text" name="allergen" id="allergen-input" />
                        </div>
                        <button type="submit" className="fluid ui green button">SUBMIT</button>
                    </form>
                </ReactModal>
            </div>
        )
    }
};

ProfileManager = reduxForm({
    form: 'profileManagerForm'
})(ProfileManager);

// export default ProfileManager;

function mapStateToProps(state) {
    return {
        data: state.children
    }
};

export default connect(mapStateToProps)(ProfileManager);