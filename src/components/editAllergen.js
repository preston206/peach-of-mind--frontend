import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import { getAllergen } from '../actions';

// components
import Nav from './nav';

class EditAllergen extends React.Component {

    componentWillMount() {
        const pid = this.props.match.params.pid;
        const cid = this.props.match.params.cid;
        const aid = this.props.match.params.aid;
        this.props.dispatch(getAllergen(pid, cid, aid));
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <div>
                <Nav pid={this.props.match.params.pid} />
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
                            <Field component="textarea" name="reaction-details" id="reaction-details" cols="30" rows="10" />
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



// export default EditAllergen;

function mapStateToProps(state) {
    if (state.allergens.allergen) {
        return {
            allergen: state.allergens.allergen,
            initialValues: {
                "allergen": state.allergens.allergen.allergen,
                "reaction-details": state.allergens.allergen.details,
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