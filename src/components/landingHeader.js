import React from 'react';
import { connect } from 'react-redux';

const LandingHeader = () => {
    return (
        <div className="ui center aligned container pad-10em">
            <h1 className="large-font">Peach of Mind</h1>
            <p className="small-font">- keep track of your child's allergies and have peace of mind -</p>
        </div>
    )
};

// export default LandingHeader;

function mapStateToProps(state) {
    return {
        data: state.children
    }
};

export default connect(mapStateToProps)(LandingHeader);