import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import { addAllergen } from '../actions';

// components
import Nav from './nav';

class AddAllergen extends React.Component {

    onSubmit(allergen) {
        const pid = this.props.match.params.pid;
        const cid = this.props.match.params.cid;
        this.props.dispatch(addAllergen(pid, cid, allergen))
            .then(res => this.props.history.push(`/${pid}/${cid}/loader`))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Nav pid={this.props.match.params.pid} nav="allergenNav" />
                <div>
                    <h1>Allergen Info</h1>
                    <form
                        className="ui inverted form allergen-form"
                        action="/allergies"
                        method="POST"
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                        )}>
                        <div className="field">
                            <label htmlFor="allergen-input">Name:</label>
                            <Field component="input" type="text" name="allergen" id="allergen-input" />
                        </div>

                        <div className="inline fields">
                            <label>Did your child have an allergic reaction?</label>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <Field component="input" type="radio" name="reaction" id="reaction-not-safe" value="unsafe" />
                                    <label htmlFor="reaction-not-safe">reaction</label>
                                </div>
                            </div>

                            <div className="field">
                                <div className="ui radio checkbox">
                                    <Field component="input" type="radio" name="reaction" id="reaction-safe" value="safe" />
                                    <label htmlFor="reaction-safe">safe</label>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="reaction-details">Details:</label>
                            <Field component="textarea" name="details" id="reaction-details" cols="30" rows="10" />
                        </div>

                        <button type="submit" className="fluid ui green button">SUBMIT</button>
                        <Link to={`${this.props.history.goBack}`}>
                            <button type="button" id="cancel-allergen" className="fluid ui grey button">CANCEL</button>
                        </Link>
                    </form>

                </div >
            </div >
        )
    }
};

AddAllergen = reduxForm({
    form: 'addAllergen'
})(AddAllergen);

function mapStateToProps(state) {
    return {
        parent: state.children
    }
};

export default connect(mapStateToProps)(AddAllergen);