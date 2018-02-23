import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ReactModal from 'react-modal';

// actions
import { getChildren, addChild } from '../actions';

// components
import Nav from './nav';

class ProfileManager extends React.Component {

    state = {
        showModal: false,
        pid: this.props.match.params.pid,
        childrenArray: []
    };

    componentWillMount() {
        this.props.dispatch(getChildren(this.state.pid))
            .then(res => {
                if (res.payload.error) {
                    if (res.payload.error.response.status === 302) return this.props.history.push(`/`);
                }
                this.setState({ childrenArray: res.payload })
            })
            .catch(error => console.log(error));
    }

    onSubmit(child) {
        this.props.dispatch(addChild(this.state.pid, child))
            .then(res => {
                if (res.payload.error) {
                    if (res.payload.error.response.status === 302) return this.props.history.push(`/`);
                }
                this.props.history.push(`/${this.state.pid}/loader`)
            })
            .catch(error => console.log(error));
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    // this method first accepts data which should be the array of children
    // then, checks to verify that it is indeed the array of children
    // thten, if the array is not empty it returns the JSX, otherwise returns the missing child profile msg
    // this method was originally exactly like the ternary in profile.js but it wasnt displaying...
    // the msg if no chidlren were present- this nested condition solved the problem
    renderChildren = children => {

        if (children) {

            if (children.length > 0) {
                return children.map(child => (
                    <Link to={`/${this.props.match.params.pid}/${child._id}`} key={child._id}>
                        <button type="button" className="massive fluid ui black button">{child.child}</button>
                    </Link>
                ))
            } else { return (<div className="ui segment"><p>You haven't added any child profiles yet.</p></div>) }

        } else { return (<div className="ui segment"><p>You haven't added any child profiles yet.</p></div>) }
    }

    render() {
        return (
            <div>
                <Nav pid={this.props.match.params.pid} nav="profileMgrNav" historyFromContainer={this.props.history} />
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
                        {this.renderChildren(this.state.childrenArray)}
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
                            <label htmlFor="child-input">Name:</label>
                            <Field component="input" type="text" name="childName" id="child-input" />
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

function mapStateToProps(state) {
    return {
        parent: state.children
    }
};

export default connect(mapStateToProps)(ProfileManager);