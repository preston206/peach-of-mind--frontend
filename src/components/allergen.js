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
                    <label for="allergen-input">Name:</label> <br />
                    <input type="text" name="allergen" id="allergen-input" /> <br /><br />

                    <span>Did your child have an allergic reaction?</span> <br />
                    <label for="reaction-not-safe">reaction</label>
                    <input type="radio" name="reaction" id="reaction-not-safe" value="reaction" />
                    <label for="reaction-safe">safe</label>
                    <input type="radio" name="reaction" id="reaction-safe" value="safe" /> <br /><br />

                    <label for="reaction-details">Details:</label> <br />
                    <textarea name="reaction-details" id="reaction-details" cols="30" rows="10"></textarea> <br />

                    <button type="submit">SUBMIT</button>
                    <button type="button" id="cancel-allergen">CANCEL</button>
                </form>
            </div>
        </div>
    )
};

export default Allergen;