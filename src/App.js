import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Ketan', age: 22 },
      { name: 'Gupta', age: 22 }
    ]
  }

    // Handler are not active functions, they are triggered by events.
    // some black magic fuckery, if a function is not referenced by a variable like done below and this is called inside it
    // it simple won't work because then this won't refer to the class at runtime.
    // Then the question arises, how the fuck is it working with render when it is not referenced by a variable?
/*
  switchNameHandler = () =>
  {
    console.log("Name Handler Working");
  }  
  */
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

    return (
      <div className="App">
        <h1>Plutov1 - Next Generation Gatekeeper</h1>
        <p>Pluto is conundrums solace in the labyrinth of this universe.</p>
        <p>The ultimate barriers shall be broken.</p>
        <Person name="Ketan"/>
        <Person name="Karan">
          <p>Hobbies include: Temperature Sensors</p>
        </Person>
      </div>
    );
  }
}

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
