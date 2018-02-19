import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import ReactModal from 'react-modal';

// actions
import { getChildren } from '../actions';

// components
import Nav from './nav';

class ProfileManager extends React.Component {

    state = {
        showModal: false
    };

    componentWillMount() {
        const pid = this.props.match.params.pid;
        this.props.dispatch(getChildren(pid));
    }

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
        // console.log("props from profile mgr component:", this.props.match);
        
        const renderChildren = children => (
            children ?
                children.map(child => (
                    <Link to={`/${this.props.match.params.pid}/${child._id}`} key={child._id}>
                        <button type="button" className="massive fluid ui black button">{child.child}</button>
                    </Link>
                ))
                : <div className="ui segment"><p>You haven't added any child profiles yet.</p></div>
        )
        
        return (
            <div>
                <Nav pid={this.props.match.params.pid} />
                <div className="ui center aligned container pad-8em">
                    <h1 id="profile-manager-header">Profile Manager</h1>
                    <p>Select a profile</p>
                    <div id="add-child-button-container">
                        <button
                            type="button"
                            className="large fluid ui green button"
                            onClick={event => this.handleOpenModal(event)
                            }>
                            Add Child +
                        </button>
                    </div>
                    <div id="profile-buttons-container">
                        {renderChildren(this.props.parent.children)}
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
        parent: state.children
    }
};

export default connect(mapStateToProps)(ProfileManager);