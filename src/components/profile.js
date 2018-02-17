import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import { getChildren } from '../actions';

// components
import Nav from './nav';

class Profile extends React.Component {

    componentWillMount() {
        const pid = this.props.match.params.pid;
        const cid = this.props.match.params.cid;
        this.props.dispatch(getChildren(pid, cid));
    }

    render() {

        const child = this.props.parent.children.find(child => child._id === this.props.match.params.cid);
        const allergies = child.allergies;
        const childName = child.child;

        const renderAllergies = allergies => (
            allergies.length > 0 ?
                allergies.map(allergen => (
                    <div className="ui green segments" key={allergen._id}>
                        <div className="ui green inverted segment">
                            <span className="allergen-name">{allergen.allergen}</span>
                        </div>

                        <div className="ui horizontal segments">
                            <div className="ui grey inverted segment">
                                <span className="allergen-reaction">{allergen.reaction}</span>
                                <span className="allergen-date">02/12/17</span>
                            </div>

                            <div className="ui grey inverted segment">
                                <Link to={`/parent/child/allergen/${allergen._id}/edit`}>
                                    <i className="setting icon"></i>
                                    <span className="allergen-edit"></span>
                                </Link>
                                <span className="allergen-delete">
                                    <i className="remove icon"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                ))
                : <div className="ui segment"><p>You haven't added any allergies yet.</p></div>
        )


        return (
            <div>
                <Nav pid={this.props.match.params.pid} />
                <div id="profile-page" className="ui center aligned container pad-9em">
                    <div id="allergies-container" className="ui black inverted segment">

                        <div className="ui center aligned secondary inverted segment">
                            <h1 id="profile-header">{childName}</h1>
                        </div>

                        <div className="three ui buttons">
                            <button className="mini ui inverted button">sort by reaction</button>
                            <button className="mini ui inverted button">sort by safe</button>
                            <Link to={`/${this.props.match.params.pid}/${this.props.match.params.cid}/allergen/add`}>
                                <button className="mini ui inverted button">add allergen</button>
                            </Link>
                        </div>

                        {renderAllergies(allergies)}

                    </div>
                </div>
            </div>
        )
    }
};

// export default Profile;

function mapStateToProps(state) {
    return {
        parent: state.children
    }
};

export default connect(mapStateToProps)(Profile);