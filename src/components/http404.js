import React from 'react';
import Nav from './nav';

const Http404 = () => {
    return (
        <div>
            <Nav />
            <div className="ui center aligned container pad-10em">
                <h1>404: </h1>
                <h2>we are unable to find that resource.</h2>
            </div>
        </div>
    )
};

export default Http404;