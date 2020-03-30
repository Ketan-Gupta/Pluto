import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();

// The mounted App component will host all the other components underneath it.
// Different root components of different apps can also be mounted here in the same html file i.e microservices.

