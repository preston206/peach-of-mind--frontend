import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import Nav from './nav';

const Profile = () => {
    return (
        <div>
            <Nav />
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

                    <div className="ui green segments">
                        <div className="ui green inverted segment">
                            <span className="allergen-name">Peanuts</span>
                        </div>

                        <div className="ui horizontal segments">
                            <div className="ui grey inverted segment">
                                <span className="allergen-reaction">safe</span>
                                <span className="allergen-date">02/12/17</span>
                            </div>

                            <div className="ui grey inverted segment">
                                <Link to="/parent/child/allergen/4321/edit">
                                    <i className="setting icon"></i>
                                    <span className="allergen-edit"></span>
                                </Link>
                                <span className="allergen-delete">
                                    <i className="remove icon"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="ui green segments">
                        <div className="ui green inverted segment">
                            <span className="allergen-name">Gluten</span>
                        </div>

                        <div className="ui horizontal segments">
                            <div className="ui grey inverted segment">
                                <span className="allergen-reaction">safe</span>
                                <span className="allergen-date">02/12/17</span>
                            </div>

                            <div className="ui grey inverted segment">
                                <span className="allergen-edit">
                                    <i className="setting icon"></i>
                                </span>
                                <span className="allergen-delete">
                                    <i className="remove icon"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="ui green segments">
                        <div className="ui red inverted segment">
                            <span className="allergen-name">Mustard</span>
                        </div>

                        <div className="ui horizontal segments">
                            <div className="ui grey inverted segment">
                                <span className="allergen-reaction">reaction</span>
                                <span className="allergen-date">02/12/17</span>
                            </div>

                            <div className="ui grey inverted segment">
                                <span className="allergen-edit">
                                    <i className="setting icon"></i>
                                </span>
                                <span className="allergen-delete">
                                    <i className="remove icon"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="ui green segments">
                        <div className="ui green inverted segment">
                            <span className="allergen-name">Wheat</span>
                        </div>

                        <div className="ui horizontal segments">
                            <div className="ui grey inverted segment">
                                <span className="allergen-reaction">safe</span>
                                <span className="allergen-date">02/12/17</span>
                            </div>

                            <div className="ui grey inverted segment">
                                <span className="allergen-edit">
                                    <i className="setting icon"></i>
                                </span>
                                <span className="allergen-delete">
                                    <i className="remove icon"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="ui green segments">
                        <div className="ui red inverted segment">
                            <span className="allergen-name">Cheese</span>
                        </div>

                        <div className="ui horizontal segments">
                            <div className="ui grey inverted segment">
                                <span className="allergen-reaction">reaction</span>
                                <span className="allergen-date">02/12/17</span>
                            </div>

                            <div className="ui grey inverted segment">
                                <span className="allergen-edit">
                                    <i className="setting icon"></i>
                                </span>
                                <span className="allergen-delete">
                                    <i className="remove icon"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="ui green segments">
                        <div className="ui green inverted segment">
                            <span className="allergen-name">Mustard</span>
                        </div>

                        <div className="ui horizontal segments">
                            <div className="ui grey inverted segment">
                                <span className="allergen-reaction">safe</span>
                                <span className="allergen-date">02/12/17</span>
                            </div>

                            <div className="ui grey inverted segment">
                                <span className="allergen-edit">
                                    <i className="setting icon"></i>
                                </span>
                                <span className="allergen-delete">
                                    <i className="remove icon"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

// export default Profile;

function mapStateToProps(state) {
    return {
        data: state.children
    }
};

export default connect(mapStateToProps)(Profile);