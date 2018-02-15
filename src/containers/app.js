import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { getChildren, getAllergens } from '../actions';

// components
import Login from '../components/login';
import Register from '../components/register';
import ProfileManager from '../components/profileManager';
import Profile from '../components/profile';
import Allergen from '../components/allergen';
import Http404 from '../components/http404';

// TODO: user usernames instead of IDs- including on the landing page\profile mgr

class App extends React.Component {

    // state = {
    //     children: []
    // }

    componentWillMount() {
        this.props.getChildren();
        this.props.getAllergens();
    }

    render() {
        console.log("props data:", this.props.data.children);
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/profile/allergen/:id" component={Allergen} />
                    <Route path="/profile/:id" component={Profile} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/" exact component={ProfileManager} />
                    <Route component={Http404} />
                </Switch>
            </BrowserRouter>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        data: state.children
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getChildren, getAllergens }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);