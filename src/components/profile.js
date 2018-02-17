import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import { getAllergens } from '../actions';

// components
import Nav from './nav';

class Profile extends React.Component {

    componentWillMount() {
        // const pid = "5a85d2f13b2f32310c0d1705";
        // const cid = "5a85d4313b2f32310c0d1708";
        const pid = "5a85d2f13b2f32310c0d1705";
        const cid = this.props.match.params.id;
        console.log("match:",this.props.match);
        this.props.dispatch(getAllergens(pid, cid));
    }

    render() {

        console.log("props from profile:", this.props.parent.allergens)

        const renderAllergies = allergies => (
            allergies ?
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

                        <div className="ui horizontal segments">
                            <div className="ui secondary inverted segment">
                                <h1 id="profile-header">Anthony</h1>
                            </div>

                            <div className="ui black inverted segment">
                                <Link to="/parent/child/allergen/4321/add">
                                    <i className="plus icon"></i>
                                    <span className="add-allergen">Add</span>
                                    <p className="add-allergen">allergen</p>
                                </Link>
                            </div>
                        </div>

                        <div className="two ui buttons">
                            <button className="mini ui black button">sort by reaction</button>
                            <button className="mini ui black button">sort by safe</button>
                        </div>

                        {renderAllergies(this.props.parent.allergens)}

                    </div>
                </div>
            </div>
        )
    }
};

// export default Profile;

function mapStateToProps(state) {
    return {
        parent: state.allergens
    }
};

export default connect(mapStateToProps)(Profile);