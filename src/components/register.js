import React from 'react';
import { Field, reduxForm } from 'redux-form';

// components
import LandingHeader from './landingHeader';

class Register extends React.Component {
    onSubmit(values) {
        console.log(values);
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
                        <button type="submit" className="fluid ui inverted black button">REGISTER</button>
                    </form>
                </div>
            </div>
        )
    }
};

Register = reduxForm({
    form: 'register'
})(Register);

export default Register;