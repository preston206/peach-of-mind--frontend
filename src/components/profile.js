import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import { getChildren, deleteAllergen } from '../actions';

// components
import Nav from './nav';

class Profile extends React.Component {

    state = {
        pid: this.props.match.params.pid,
        cid: this.props.match.params.cid,
        allergyArray: [],
        childName: ''
    }

    componentWillMount() {
        this.props.dispatch(getChildren(this.state.pid))
            .then(res => {
                const child = res.payload.find(child => child._id === this.props.match.params.cid);
                if (this.state.childName !== child.child) this.setState({ childName: child.child });
                if (this.state.allergyArray.length !== child.allergies.length) this.setState({ allergyArray: child.allergies });
            })
            .catch(error => console.log(error));
    }

    updateStateWithNewAllergyArray(newAllergyArray) {
        return this.setState({ allergyArray: newAllergyArray });
    }

    handleChildNameChange(childName) {
        console.log(childName);
        return this.setState({ childName: childName });
    }

    deleteAllergen = id => {
        const confirmDelete = window.confirm("delete?");
        if (confirmDelete) {
            this.props.dispatch(deleteAllergen(this.state.pid, this.state.cid, id))
                .then(res => this.props.history.push(`/${this.state.pid}/${this.state.cid}/loader`))
                .catch(error => console.log(error));
        }
    }

    renderAllergies = allergies => {
        let newArray;
        if (allergies.length > 0) {

            newArray = allergies.map(allergen => {

                // add the allergen ID to a variable for attaching to the delete fn
                const aid = allergen._id;

                // creating date vars for date stamping the allergen when it gets rendered
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

                // a ternary for color coding the allergen according to safe\unsafe
                const allergenReaction = allergen.reaction === "safe" ?
                    <div className="ui green inverted segment">
                        <span className="allergen-name">{allergen.allergen}</span>
                    </div>
                    :
                    <div className="ui red inverted segment">
                        <span className="allergen-name">{allergen.allergen}</span>
                    </div>;

                // building the allergen segment and returning JSX
                return (
                    <div className="ui segments" key={allergen._id}>

                        {allergenReaction}

                        <div className="ui horizontal segments">
                            <div className="ui grey inverted segment">
                                <span className="allergen-reaction">{allergen.reaction}</span>
                                <span className="allergen-date">{`${monthNumberToWord(month)} ${day}`}</span>
                            </div>

                            <div className="ui grey inverted segment">
                                <Link to={`/${this.state.pid}/${this.state.cid}/${allergen._id}/edit`}>
                                    <i className="setting icon" title="remove this allergen"></i>
                                    <span className="allergen-edit"></span>
                                </Link>
                                <span className="allergen-delete" onClick={id => this.deleteAllergen(aid)}>
                                    <i className="remove icon"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
            )
        }

        else { return (<div className="ui segment"><p>You haven't added any allergies yet.</p></div>) }

        return newArray;
    }

    sortByUnsafe(allergies) {
        const unsafe = [];
        const safe = [];
        allergies.forEach(allergen => {
            if (allergen.reaction === "unsafe") {
                unsafe.push(allergen);
            }
            else {
                safe.push(allergen);
            }
        })
        const combinedReactions = unsafe.concat(safe);
        this.updateStateWithNewAllergyArray(combinedReactions);
    }

    sortBySafe(allergies) {
        const unsafe = [];
        const safe = [];
        allergies.forEach(allergen => {
            if (allergen.reaction === "unsafe") {
                unsafe.push(allergen);
            }
            else {
                safe.push(allergen);
            }
        })
        const combinedReactions = safe.concat(unsafe);
        this.updateStateWithNewAllergyArray(combinedReactions);
    }

    render() {
        return (
            <div>
                <Nav pid={this.state.pid} cid={this.state.cid} nav="profileNav" changeChildName={name => this.handleChildNameChange(name)} />
                <div id="profile-page" className="ui center aligned container pad-9em">
                    <div id="allergies-container" className="ui black inverted segment">

                        <div className="ui center aligned secondary inverted segment">
                            <h1 id="profile-header">{this.state.childName}</h1>
                        </div>

                        <div className="three ui buttons">
                            <button className="mini ui inverted button" onClick={allergen => this.sortByUnsafe(this.state.allergyArray)}>Sort by Reaction</button>
                            <button className="mini ui inverted button" onClick={allergen => this.sortBySafe(this.state.allergyArray)}>Sort by Safe</button>
                            <Link to={`/${this.state.pid}/${this.state.cid}/allergen/add`}>
                                <button className="mini ui inverted button">Add Allergen</button>
                            </Link>
                        </div>

                        {this.renderAllergies(this.state.allergyArray)}

                    </div>
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

export default connect(mapStateToProps)(Profile);