import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const name = "Trial Name";
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// The mounted App component will host all the other components underneath it.
// Different root components of different apps can also be mounted here in the same html file i.e microservices.

const tick = () => {
  const element = (
    <div>
      <h1>{new Date().toLocaleTimeString()}.</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
};
setInterval(tick, 1000);
