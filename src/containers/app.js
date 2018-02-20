import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { getChildren, getChild, getAllergens, getAllergen } from '../actions';
// import { getChildren, getAllergens } from '../actions';

// components
import Login from '../components/login';
import Register from '../components/register';
import ProfileManager from '../components/profileManager';
import Profile from '../components/profile';
import AddAllergen from '../components/addAllergen';
import EditAllergen from '../components/editAllergen';
import Http404 from '../components/http404';
import Loader from '../components/loader';

import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

class App extends React.Component {

    // state = {
    //     children: []
    // }

    // componentWillMount() {
    //     this.props.getChild();
    //     this.props.getAllergen();
    //     this.props.getChildren();
    //     this.props.getAllergens();
    // }

    render() {
        // console.log("props:", this.props);
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/profilemgr/:pid" exact component={ProfileManager} />
                    <Route path="/:pid/:cid/allergen/add" component={AddAllergen} />
                    <Route path="/:pid/:cid/:aid/edit" component={EditAllergen} />
                    <Route path="/:pid/:cid/loader" component={Loader} />
                    <Route path="/:pid/:cid" component={Profile} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/" exact component={Login} />
                    <Route component={Http404} />
                </Switch>
            </BrowserRouter>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        parent: state.children
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getChildren, getChild, getAllergens, getAllergen }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);