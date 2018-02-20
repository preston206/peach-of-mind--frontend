import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// axios
// import axios from 'axios';

// components
import LandingHeader from './landingHeader';

// actions
import { register } from '../actions';

class Register extends React.Component {

    onSubmit(parent) {
        console.log(parent);
        return this.props
            .dispatch(register(parent))
            .then(res => {
                if (!res) return Promise.reject({ msg: "unable to register" });
                const pid = res.payload.id;
                this.props.history.push(`/profilemgr/${pid}`);
            })
            .catch(err => console.log(err));
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
                            <Field component="input" type="email" name="email" id="email" required autoFocus />
                        </div>
                        <div className="required field">
                            <label htmlFor="username">Username</label>
                            <Field component="input" type="text" name="username" id="username" required />
                        </div>
                        <div className="required field">
                            <label htmlFor="password">Password</label>
                            <Field component="input" type="password" name="password" id="password" required />
                        </div>

                        <button type="submit" className="fluid ui green button btn-margin-bottom">REGISTER</button>

                        <Link to="/login">
                            <button type="button" className="fluid ui grey button">GO TO LOGIN</button>
                        </Link>
                    </form>
                </div >
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