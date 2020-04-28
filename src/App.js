import React, { useState, Component } from "react";
import "./App.css";
import Radium from 'radium';
import Person from './Person/Person'
 


class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    persons: [
      { id: 1, name: 'Ketan', guilty: true },
      { id:2, name: 'Karan', guilty: false }
    ],
    mutable: true,
    showPersons: false
  }
    // Handler are not active functions, they are triggered by events.
    // some black magic fuckery, if a function is not referenced by a variable like done below and this is called inside it
    // it simple won't work because then this won't refer to the class at runtime.
    // Then the question arises, how the fuck is it working with render when it is not referenced by a variable?
    /*
    switchNameHandler = (names) => {
      //console.log("Name Handler Working");
      // this.state.person[0].name = "Trial";
      // DO NOT DO THIS. Use setState()
      this.setState({
        persons: [
          { name: names[0], guilty: true },
          { name: names[1], guilty: false },
        ]
      });
  
      // this will only change the person. It won't affect the part of the state that is not included in the changed object.
    }
    */

  deletePersonHandler = (index) => {
    // slice without any arguments will simple copy that array and return a new one.
    // the spread operator on persons will take the individual elements from that array
    // and convert them into individual list, which are then kept in the array we declared.
    // works same as slice operator.
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    const mutable = persons.length === 0 ? false : true;
    this.setState({
      persons: persons,
      mutable : mutable
    })

  }

  togglePersonsHandler = () => {
    const currentShowPersonsStatus = this.state.showPersons;
    this.setState({
      showPersons: !currentShowPersonsStatus
    })
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];    
    persons[personIndex] = person;

    this.setState({
      persons : persons
    });

  }
  render() {
    //return <h1 className="App-title">Welcome to React</h1>;
    //return React.createElement("div", null, "h1", "Hi! I am React Application");
    // The upper will render h1 as text and not as a react component.
    /* return React.createElement(
      "div",
      { className: "App-title" },
      React.createElement("h1", null, "Hi! I am React Application")
    );
    */

    let classes = [];

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    if (!this.state.mutable)
    {
      style.backgroundColor = 'black';  
    }

    if (this.state.persons.length <= 2)
    {
      classes.push('red');
    }
    if (this.state.persons.length <=1)
    {
      classes.push('bold');
    }
    if (this.state.persons.length === 0)
    {
      classes.splice(0, classes.length);
    }

    if (this.state.showPersons && this.state.mutable)
    {
      persons = (
           <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.changeNameHandler(event, person.id)}
                />
          })
            /*
              <Person
                name={this.state.persons[0].name}
                guilty={this.state.persons[0].name} />
              <Person
                name={this.state.persons[1].name}
                guilty={this.state.persons[1].name}
                click={this.switchNameHandler}
                change={this.changeNameHandler}
              >Sergeant at Arms.
              </Person>
              */
          }
          </div> 
      );
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Plutov1 - Next Generation Gatekeeper</h1>
        <p>Pluto is conundrums solace in the labyrinth of this universe.</p>
        <p className={classes.join(' ')}>The ultimate barriers shall be broken.</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

/*
const app = (props) => {

  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Ketan', guilty: true },
      { name: 'Karan', guilty: false }
    ],
    count: 0
  });

  const [otherState, setOtherState] = useState("Temporary String value");

  const switchNameHandler = () => {
    //console.log("Name Handler Working");
    // this.state.person[0].name = "Trial";
    // DO NOT DO THIS. Use setState()
    setPersonState({
      persons: [
        { name: 'Gupta', guilty: true },
        { name: 'Oberoi', guilty: false },
      ],
      count: personState.count
    });
    // this will only change the person. It won't affect the part of the state that is not included in the changed object.
    setOtherState("Changed Temporary Value");
    console.log(otherState);
  }

  console.log(personState, otherState);


  return (
    <div className="App">
      <h1>Plutov1 - Next Generation Gatekeeper</h1>
      <p>Pluto is conundrums solace in the labyrinth of this universe.</p>
      <p>The ultimate barriers shall be broken.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} guilty={personState.persons[0].name} />
      <Person name={personState.persons[1].name} guilty={personState.persons[1].name}>
        Hobbies include: Temperature Sensors.
      </Person>
    </div>
  );
}
*/

export default App;

// Importing this file will import this particular class, since the export is default.
// The html compiles to the code which is returned internally.

// The keyword class can't be used since it is a reserved keyword in Javascript.
// It is good practise to wrap a single component's code into a single root.
// It isn't html, it's jsx.

// JSX Expression must have only one root element. It doesn't support multiple root elements.
// Best practise is wrap everything into one root element per component.
// Custom made components needs to be written and appiled with capital letters, so that react establishes a component as custom made.

// Sub tags inside Person tag can't be used directly, they need to go through children property.

// Props are used to send information from outside, state is used to manage information from inside. However, state only works with components generated
// by extending a class as component.
// However hooks can be used to manage inside information for functional components.

// We don't add the () in the function call in onClick event trigger, because if () are added the function will be triggers automatically on its own as
// react renders it.
// Hence, we only pass the reference of the variable that is holding the actual the function.

// "this" keyword will only with arrow functions i.e es6 syntax. If a normal function was declared inside a class
// and "this" keyword was used inside it, it will start throwing errors. That is how "this" simply working in javascript.
// in such cases, usually "this" stops referring to the class and hence cannot be used.

// setState takes object as input and merges those changes with the previous state values.

// React analyzes the code to check for changes in State or Props. If any of those changes are detected, it will re-render it.
// Hence React will update the DOM in all the places that it needs to be updated to reflect the new state.

// Since states can only be used in class based components, we have hooks that can be used with functional components.

// useState returns exactly two elements.
// First element being the current/actual state, and the other element being the function that presents the opportunity to set/change that state.

// The current/actual state when extracted from the array can be used just like the original state object.
// the custom "named" function setPersonState is mimicking the function setState provided by React.
// However, this custom named function does not "merge" the new state into old one i.e the previous state values that are not
// provided into the setPersonState will not be preserved w.r.t to the old state values.
// which means that it replaces the old state with the new state instead of merging it.
// multiple useStates can be used. userStates doesn't necessarily take objects, it also takes string, boolean, number etc.

// Interesting : the "state" doesn't change even though setOtherChange was called(with console.log just after printing the old value).
// This could only imply that react doesn't change
// the state until and unless it detects the changes in the state and re-renders the page, hence ultimately updating the DOM.

// Good practise is to use as many stateless/dumb components as possible, wherein the information is being collected from outside.
// rather than formulating it inside. Defining states multiple places can lead to confusion and un-necessary issues.

// stateful components = class based with setState, functional with useState [smart/container] use as few as possible
// stateless components = any component without any state defined, either setState or useState. [presentational]

// Methods references can be passed as props, the functional foundation of this attribute is so as to allow for a component to triggert
// a change event i.e change the state of a component which it might not have direct access to, usually changing data in the parent component.
// a similary analogy could be getter/setters in java working in similar behavious.

// arguments can be passed into the function reference defined on button click, we have a bind property with this as the first argument,
// which will bind "this" as first passed argument, to the "this" defined inside the switchNameHandler. 
// Remember only because of ES6/arrow function defition, "this" can be used otherwise it would have thrown error.

// instead of bind, we can also use an anonymous function () => this.switchNameHandler(names) in the props and pass the reference there.
// not recommeded, may introduce performance issues. 

// Check how in changeNameHandler , we did not have to explicitly bind any data to it i.e pass any arguments.
// the event is automatically passed by javascript containing the html attribute and its associated value.


// Learned so far: Trigger changes through event. Passing down method references(aka event references)

// Scope allows for inline styling to take place, that is attaching css to a particular element only. Not recommended.

// this.switchNameHandler.bind(this, ["Gupta", "Oberoi"] binding data i.e passing data into the method switchNameHandler

// JSX statements inside {} cannot contain block statements, only expressions.

// React when updating, executes the render method and executes everything that falls inside the render method.
// even the updated the css.

// Flaw in deleting the person, inside the personhandler. In javascript objects and arrays are reference types.
// Hence when the state of is procured, javascript will return a pointer to that original state. 
// When the splice was made, it mutated the original state with it. We don't want that. 
// Hence, the optimum approach should be to copy that state and then perform operations on it.

// state should always be updated in an immutable fashion. Copy the state and then update the copy and apply.

// The className can also be changed dynamically for a component.