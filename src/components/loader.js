import React from 'react';
import { connect } from 'react-redux';

class Loader extends React.Component {
    componentWillMount() {
        const pid = this.props.match.params.pid;
        const cid = this.props.match.params.cid;
        setTimeout(() => {
            this.props.history.push(`/${pid}/${cid}`);
        }, 1600);
    }
    render() {
        return (
            <div className="ui center aligned container pad-10em">
                <div class="ui active dimmer">
                    <div class="ui text loader">Processing...</div>
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

export default connect(mapStateToProps)(Loader);