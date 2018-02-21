import React from 'react';
import { connect } from 'react-redux';

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