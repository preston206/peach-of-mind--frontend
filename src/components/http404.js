import React from 'react';
import { connect } from 'react-redux';

const Http404 = () => {
    return (
        <div>
            <div className="ui center aligned container pad-10em">
                <h1>404: </h1>
                <h2>we are unable to find that resource.</h2>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        parent: state.children
    }
};

export default connect(mapStateToProps)(Http404);