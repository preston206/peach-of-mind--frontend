import React from 'react';
import { Field, reduxForm } from 'redux-form';

// components
import Nav from './nav';

class AddAllergen extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <div>
                <Nav />
                <div>
                    <h1>Allergen Info</h1>
                    <form
                        action="/allergies"
                        method="POST"
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                        )}>
                        <label for="allergen-input">Name:</label> <br />
                        <Field component="input" type="text" name="allergen" id="allergen-input" /> <br /><br />

                        <span>Did your child have an allergic reaction?</span> <br />
                        <label for="reaction-not-safe">reaction</label>
                        <Field component="input" type="radio" name="reaction" id="reaction-not-safe" value="unsafe" />

                        <label for="reaction-safe">safe</label>
                        <Field component="input" type="radio" name="reaction" id="reaction-safe" value="safe" /> <br /><br />

                        <label for="reaction-details">Details:</label> <br />
                        <Field component="textarea" name="reaction-details" id="reaction-details" cols="30" rows="10" /> <br />

                        <button type="submit">SUBMIT</button> 
                        <button type="button" id="cancel-allergen">CANCEL</button>
                    </form>
                </div>
            </div>
        )
    }
};

AddAllergen = reduxForm({
    form: 'addAllergen'
})(AddAllergen);

export default AddAllergen;