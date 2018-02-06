import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Login from './components/login';
import Register from './components/register';
import ProfileManager from './components/profileManager';
import Profile from './components/profile';
import Allergen from './components/allergen';
import Http404 from './components/http404';


// TODO: react-scripts have been installed- how do I configure?

const App = () => {
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

ReactDOM.render(<App />, root);