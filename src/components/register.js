import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// react modal package
import ReactModal from 'react-modal';

// components
import LandingHeader from './landingHeader';

// actions
import { register, login } from '../actions';

class Register extends React.Component {

    state = {
        showModal: false,
        regErrorMsg: ''
    };

    onSubmit(parent) {
        // on submit dispatch register action
        return this.props
            .dispatch(register(parent))
            .then(res => {

                // if no response object reject promise and throw error
                if (!res) return Promise.reject({ msg: "unable to register" });

                // if response object contains error property reject promise and throw error
                if (res.payload.error) {

                    // updating the state depending on if response error status = 500
                    res.payload.error.response.status === 500 ?
                        this.setState({ regErrorMsg: "that email address already exists in our database" })
                        :
                        this.setState({ regErrorMsg: res.payload.error.response.data.message });

                    // wait 200ms for the state to get updated and then fire modal with error msg
                    setTimeout(() => {
                        this.handleOpenModal();
                    }, 200);

                    return Promise.reject({ msg: "registration error" });
                }

                // if server returns 201 created then wait 1.5s then dispatch login then transfer to profile page
                if (res.payload.status === 201) {
                    setTimeout(() => {

                        return this.props
                            .dispatch(login(parent))
                            .then(res => {
                                if (res.payload.error) {
                                    // if error send user to login page
                                    // there was probably a race condition that would be resolved by the time they tried to login
                                    this.props.history.push('/');
                                    return Promise.reject({ error: 'invalid credentials' });
                                };
                                // same reason as above- if error send user to login to try again 
                                if (!res.payload) {
                                    this.props.history.push('/');
                                    return Promise.reject({ msg: "unable to login" });
                                };

                                return this.props.history.push(`/profilemgr/${res.payload.data.pid}`);
                            }) // end nested .then() for login
                            .catch(error => console.log(error));
                    }, 1500); // end setTimeout
                } else { this.props.history.push('/'); }
            }) // end .then()
            .catch(err => console.log(err));
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
                        action="/register"
                        method="POST"
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                        )}>

                        <div className="required field">
                            <label htmlFor="email">Email</label>
                            <Field component="input" type="email" name="email" id="email" placeholder="email" required autoFocus />
                        </div>
                        <div className="required field">
                            <label htmlFor="username">Username</label>
                            <Field component="input" type="text" name="username" id="username" placeholder="username" minLength="4" required />
                        </div>
                        <div className="required field">
                            <label htmlFor="password">Password</label>
                            <Field component="input" type="password" name="password" id="password" placeholder="password" minLength="8" maxLength="72" required />
                        </div>

                        <button type="submit" className="fluid ui green button btn-margin-bottom">REGISTER</button>

                        <Link to="/login">
                            <button type="button" className="fluid ui grey button">GO TO LOGIN</button>
                        </Link>
                    </form>
                </div >

                <div>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="there has been a registration problem"
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

                        <div className="ui segment" id="register-error-message">
                            <h1>Registration Error</h1>
                            <p>{this.state.regErrorMsg}</p>
                            <p>please try again</p>
                        </div>
                    </ReactModal>
                </div>
            </div >
        )
    }
};

Register = reduxForm({
    form: 'register'
})(Register);

function mapStateToProps(state) {
    return {
        parent: state.children
    }
};

export default connect(mapStateToProps)(Register);