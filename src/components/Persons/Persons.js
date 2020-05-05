import React, { useState } from 'react';
import Person from './Person/Person'

const Persons = (props) => props.persons.map((person, index) => {
    return (
        <Person
            click={props.clicked.bind(this, index)}
            name={person.name}
            age={person.age}
            key={person.id}
            change={(event) => props.changed(event, person.id)}
        />
    )
});


export default Persons;