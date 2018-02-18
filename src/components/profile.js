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
        this.props.dispatch(getChildren(pid));
    }

    render() {

        const child = this.props.parent.children.find(child => child._id === this.props.match.params.cid);
        const allergies = child.allergies;
        const childName = child.child;

        const renderAllergies = allergies => (
            allergies.length > 0 ?
                allergies.map(allergen => {
                    const dateFromMongoDB = allergen.updatedAt ? allergen.updatedAt : allergen.added;
                    const month = dateFromMongoDB.substring(5, 7);
                    const day = dateFromMongoDB.substring(8, 10);

                    const monthNumberToWord = month => {
                        switch (month) {
                            case "01":
                                return "Jan"
                            case "02":
                                return "Feb"
                            case "03":
                                return "Mar"
                            case "04":
                                return "Apr"
                            case "05":
                                return "May"
                            case "06":
                                return "Jun"
                            case "07":
                                return "Jul"
                            case "08":
                                return "Aug"
                            case "09":
                                return "Sep"
                            case "10":
                                return "Oct"
                            case "11":
                                return "Nov"
                            case "12":
                                return "Dec"
                            default:
                                break;
                        };
                    };

                    const allergenReaction = allergen.reaction === "safe" ?
                        <div className="ui green inverted segment">
                            <span className="allergen-name">{allergen.allergen}</span>
                        </div>
                        :
                        <div className="ui red inverted segment">
                            <span className="allergen-name">{allergen.allergen}</span>
                        </div>;

                    return (
                        <div className="ui segments" key={allergen._id}>

                            {allergenReaction}

                            <div className="ui horizontal segments">
                                <div className="ui grey inverted segment">
                                    <span className="allergen-reaction">{allergen.reaction}</span>
                                    <span className="allergen-date">{`${monthNumberToWord(month)} ${day}`}</span>
                                </div>

                                <div className="ui grey inverted segment">
                                    <Link to={`/${this.props.match.params.pid}/${this.props.match.params.cid}/${allergen._id}/edit`}>
                                        <i className="setting icon" title="remove this allergen"></i>
                                        <span className="allergen-edit"></span>
                                    </Link>
                                    <span className="allergen-delete">
                                        <i className="remove icon"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
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
                            <button className="mini ui inverted button">Sort by Reaction</button>
                            <button className="mini ui inverted button">Sort by Safe</button>
                            <Link to={`/${this.props.match.params.pid}/${this.props.match.params.cid}/allergen/add`}>
                                <button className="mini ui inverted button">Add Allergen</button>
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