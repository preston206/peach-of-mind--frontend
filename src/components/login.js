import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// react modal package
import ReactModal from 'react-modal';

// components
import LandingHeader from './landingHeader';

// actions
import { login } from '../actions';

class Login extends React.Component {

    state = {
        showModal: false
    };

    onSubmit(parent) {
        console.log(parent);
        return this.props
            .dispatch(login(parent))
            .then(res => {
                console.log("res--", res);
                if (res.payload.error) {
                    this.handleOpenModal();
                    return Promise.reject({ error: 'Wrong Credentials' })
                }

                if (!res.payload) return Promise.reject({ msg: "unable to login" });
                return this.props.history.push(`/profilemgr/${res.payload.data.id}`);
            })
            .catch(error => {
                return console.log(error);
            });
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="peach-background">
                <LandingHeader />
                <div className="ui container">
                    <form
                        className="ui inverted form login-register-form"
                        action="/login"
                        method="POST"
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                        )}>
                        <div className="required field">
                            <label htmlFor="username">Username</label>
                            <Field component="input" type="text" name="username" id="username" placeholder="password" required autoFocus />
                        </div>
                        <div className="required field">
                            <label htmlFor="password">Password</label>
                            <Field component="input" type="password" name="password" id="password" placeholder="password" required />
                        </div>
                        <button type="submit" className="fluid ui green button">LOGIN</button>
                        <Link to="/register">
                            <button type="button" className="fluid ui grey button">GO TO REGISTER</button>
                        </Link>
                    </form>
                </div>

                <div>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="there has been an authentication problem"
                        className="login-modal"
                    >

                        <button
                            type="button"
                            className="circular ui icon button"
                            onClick={event => this.handleCloseModal(event)
                            }>
                            <span className="profile-form-close-button">X</span>
                        </button>

                        <div className="ui segment" id="login-message">
                            <h1>Login Error</h1>
                            <h2>please try again</h2>
                        </div>
                    </ReactModal>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        parent: state.children
    }
};

Login = reduxForm({
    form: 'login'
})(Login);

export default connect(mapStateToProps)(Login);