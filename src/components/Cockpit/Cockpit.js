import React from 'react';
import classes from '../Cockpit/Cockpit.css';

const Cockpit = (props) => {

    const tempClasses = [];
    let buttonClass = '';

    if (!props.mutable)
    {
      buttonClass = classes.Disabled;  
    }

    if (props.showPersons && props.mutable) {
        buttonClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      tempClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      tempClasses.push(classes.bold);
    }
    if (props.persons.length === 0) {
      tempClasses.splice(0, tempClasses.length);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Plutov1 - Next Generation Gatekeeper</h1>
            <p>Pluto is conundrums solace in the labyrinth of this universe.</p>
            <p className={tempClasses.join(' ')}>The ultimate barriers shall be broken.</p>
            <button className={buttonClass} onClick={props.toggle}>Toggle Persons</button>
        </div>
    );

}

export default Cockpit;

// hardcoded elements not wrapped in a parent tag cannot be returned.
// However, with es6  - list was shown to be returned which is one of the ways of returning multiple elements
// inside the return statement.

// We cannot use classes scoped out of app.css because we are not loading our data(one where css 
// is being applied) from app.js, instead it is being loaded out of cockpit. 
