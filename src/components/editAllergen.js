import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import { getAllergen, editAllergen } from '../actions';

// components
import Nav from './nav';

class EditAllergen extends React.Component {

    state = {
        pid: this.props.match.params.pid,
        cid: this.props.match.params.cid,
        aid: this.props.match.params.aid
    }

    componentWillMount() {
        this.props.dispatch(getAllergen(this.state.pid, this.state.cid, this.state.aid))
            .then(res => {
                if (res.payload.error) {
                    if (res.payload.error.response.status === 302) return this.props.history.push(`/`);
                }
            })
            .catch(error => console.log(error));
    }

    onSubmit(allergen) {
        this.props.dispatch(editAllergen(this.state.pid, this.state.cid, this.state.aid, allergen))
            .then(res => {
                if (res.payload.error) {
                    if (res.payload.error.response.status === 302) return this.props.history.push(`/`);
                }
                this.props.history.push(`/${this.state.pid}/${this.state.cid}/loader`)
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Nav pid={this.props.match.params.pid} nav="allergenNav" historyFromContainer={this.props.history} />
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

                        <button type="submit" className="fluid ui green button">UPDATE</button>
                        <Link to={`${this.props.history.goBack}`}>
                            <button type="button" id="cancel-allergen" className="fluid ui grey button">CANCEL</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    if (state.allergens.allergen) {
        return {
            allergen: state.allergens.allergen,
            initialValues: {
                "allergen": state.allergens.allergen.allergen,
                "details": state.allergens.allergen.details,
                "reaction": state.allergens.allergen.reaction
            }
        }
    }
    else {
        return {
            allergen: state.allergens.allergen
        }
    }
};

EditAllergen = reduxForm({
    form: 'editAllergen',
    enableReinitialize: true
})(EditAllergen);

export default connect(mapStateToProps)(EditAllergen);