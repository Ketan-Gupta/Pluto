import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from './Person/Person'

  /*
  class App extends Component {
    state = {
      persons: [
        { name: 'Ketan', guilty: true },
        { name: 'Karan', guilty: false}
      ],
      count: 0
    }
      // Handler are not active functions, they are triggered by events.
      // some black magic fuckery, if a function is not referenced by a variable like done below and this is called inside it
      // it simple won't work because then this won't refer to the class at runtime.
      // Then the question arises, how the fuck is it working with render when it is not referenced by a variable?
    switchNameHandler = () =>
    {
      //console.log("Name Handler Working");
      // this.state.person[0].name = "Trial";
      // DO NOT DO THIS. Use setState()
      this.setState({
        persons: [
          { name: 'Gupta', guilty: true },
          { name: 'Oberoi', guilty: false },
        ]
      });
      // this will only change the person. It won't affect the part of the state that is not included in the changed object.
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
  /*
      return (
        <div className="App">
          <h1>Plutov1 - Next Generation Gatekeeper</h1>
          <p>Pluto is conundrums solace in the labyrinth of this universe.</p>
          <p>The ultimate barriers shall be broken.</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name}/>
          <Person name={this.state.persons[1].name}>
            Hobbies include: Temperature Sensors.
          </Person>
        </div>
      );
    }
  }
  
  */

const app = () => {
  return (
    <div className="App">
      <h1>Plutov1 - Next Generation Gatekeeper</h1>
      <p>Pluto is conundrums solace in the labyrinth of this universe.</p>
      <p>The ultimate barriers shall be broken.</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name="Ketan" />
      <Person name="Karan">
        Hobbies include: Temperature Sensors.
      </Person>
    </div>
  );
}

export default app;

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