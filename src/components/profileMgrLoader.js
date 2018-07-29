import React from 'react';
import { connect } from 'react-redux';

// the purpose of this component is to show the user that their request is
// processing, in turn allowing the database a little extra time to write the data before
// displaying the data to the page

class ProfileMgrLoader extends React.Component {

    componentWillMount() {
        const pid = this.props.match.params.pid;
        setTimeout(() => {
            this.props.history.push(`/profilemgr/${pid}/`);
        }, 1000);
    }

    render() {
        return (
            <div className="ui center aligned container pad-10em">
                <div className="ui active dimmer">
                    <div className="ui text loader">Processing...</div>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        parent: state.children
    }
};

export default connect(mapStateToProps)(ProfileMgrLoader);