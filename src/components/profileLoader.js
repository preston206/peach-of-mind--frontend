import React from 'react';
import { connect } from 'react-redux';

class ProfileLoader extends React.Component {
    componentWillMount() {
        const pid = this.props.match.params.pid;
        const cid = this.props.match.params.cid;
        setTimeout(() => {
            this.props.history.push(`/${pid}/${cid}`);
        }, 1400);
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

export default connect(mapStateToProps)(ProfileLoader);