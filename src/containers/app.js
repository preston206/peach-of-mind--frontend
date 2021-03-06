import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { getChildren, getChild, getAllergens, getAllergen } from '../actions';

// components
import Login from '../components/login';
import Register from '../components/register';
import ProfileManager from '../components/profileManager';
import Profile from '../components/profile';
import AddAllergen from '../components/addAllergen';
import EditAllergen from '../components/editAllergen';
import Http404 from '../components/http404';
import ProfileLoader from '../components/profileLoader';
import ProfileMgrLoader from '../components/profileMgrLoader';
import Instructions from '../components/instructions';

// third party package for using a modal pop-up with React
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/profilemgr/:pid" exact component={ProfileManager} />
                    <Route path="/:pid/:cid/allergen/add" component={AddAllergen} />
                    <Route path="/:pid/:cid/:aid/edit" component={EditAllergen} />
                    <Route path="/:pid/:cid/loader" component={ProfileLoader} />
                    <Route path="/:pid/loader" component={ProfileMgrLoader} />
                    <Route path="/:pid/:cid" component={Profile} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/demo" component={Instructions} />
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