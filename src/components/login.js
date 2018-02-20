import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import LandingHeader from './landingHeader';

// actions
import { login } from '../actions';

class Login extends React.Component {
    onSubmit(parent) {
        console.log(parent);
        return this.props
            .dispatch(login(parent))
            .then(res => {
                if (!res) return Promise.reject({ msg: "unable to login" });
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
                        action="/login"
                        method="POST"
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                        )}>
                        <div className="required field">
                            <label htmlFor="username">Username</label>
                            <Field component="input" type="text" name="username" id="username" required autoFocus />
                        </div>
                        <div className="required field">
                            <label htmlFor="password">Password</label>
                            <Field component="input" type="password" name="password" id="password" required />
                        </div>
                        <button type="submit" className="fluid ui green button">LOGIN</button>
                        <Link to="/register">
                            <button type="button" className="fluid ui grey button">GO TO REGISTER</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
};

Login = reduxForm({
    form: 'login'
})(Login);

// export default Login;

function mapStateToProps(state) {
    return {
        parent: state.children
    }
};

export default connect(mapStateToProps)(Login);