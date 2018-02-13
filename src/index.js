import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// css
import './CSS/style.css';

// components
import Login from './components/login';
import Register from './components/register';
import ProfileManager from './components/profileManager';
import Profile from './components/profile';
import Allergen from './components/allergen';
import Http404 from './components/http404';

// TODO: user usernames instead of IDs- including on the landing page\profile mgr

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