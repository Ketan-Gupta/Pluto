import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
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
        <p>Are you ready to drop the charade?</p>
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
