import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// third party modal pop-up for react
import ReactModal from 'react-modal';

// components
import LandingHeader from './landingHeader';

// actions
import { login } from '../actions';

class Login extends React.Component {

    state = {
        showModal: false,
        loginErrorMsg: ''
    };

    onSubmit(parent) {

        // dispatching the action for authentication
        return this.props
            .dispatch(login(parent))
            .then(res => {

                // if the response from the server contains an error, then store the error message in the state and reject promise
                if (res.payload.error) {

                    this.setState({ loginErrorMsg: "invalid credentials" })

                    // pause for 200ms before firing modal, to allow the state to get updated
                    // the modal will contain the error message returned from the server
                    setTimeout(() => {
                        this.handleOpenModal();
                    }, 200);

                    return Promise.reject({ error: 'invalid credentials' })
                }

                if (!res.payload) return Promise.reject({ msg: "unable to login" });

                // if successfully authenticated then bounce the user to their profile page, which contains all of their child profiles
                return this.props.history.push(`/profilemgr/${res.payload.data.pid}`);
            })
            .catch(error => console.log(error));
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
                            <Field component="input" type="text" name="username" id="username" placeholder="username" minLength="4" required autoFocus />
                        </div>
                        <div className="required field">
                            <label htmlFor="password">Password</label>
                            <Field component="input" type="password" name="password" id="password" placeholder="password" minLength="8" maxLength="72" required />
                        </div>
                        <button type="submit" className="fluid ui green button">LOGIN</button>
                        <Link to="/register">
                            <button type="button" className="fluid ui grey button">GO TO REGISTER</button>
                        </Link>
                    </form>
                    <div className="login-instructions-container">
                        <p>Test Account Login Instructions:</p>
                        <span>Username: peter</span><br />
                        <span>Password: griffen99</span><br />
                        <span>(credentials are case sensitive)</span>
                    </div>
                </div>

                <div>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="there has been an authentication problem"
                        className="register-login-modal"
                        style={{
                            overlay: {
                                position: "fixed",
                                top: "0px",
                                left: "0px",
                                right: "0px",
                                bottom: "0px",
                                backgroundColor: "rgba(255, 255, 255, 0.55)",
                                zIndex: "3"
                            }
                        }}
                    >

                        <button
                            type="button"
                            className="circular ui icon button"
                            onClick={event => this.handleCloseModal(event)
                            }>
                            <span className="profile-form-close-button">X</span>
                        </button>

                        <div className="ui segment" id="login-error-message">
                            <h1>Login Error</h1>
                            <p>{this.state.loginErrorMsg}</p>
                            <p>please try again</p>
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