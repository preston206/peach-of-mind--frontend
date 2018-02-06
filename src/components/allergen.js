import React from 'react';

// components
import Nav from './nav';

const Allergen = () => {
    return (
        <div>
            <Nav />
            <div>
                <h1>Allergen Info</h1>
                <form action="/allergies" method="POST">
                    <input type="text" name="allergen" id="allergen-input" />
                    <input type="radio" name="reaction" id="reaction" />
                    <textarea name="reaction-details" id="reaction-details" cols="30" rows="10"></textarea>
                    <button type="submit">SUBMIT</button>
                    <button type="button" id="cancel-allergen">CANCEL</button>
                </form>
            </div>
        </div>
    )
};

export default Allergen;