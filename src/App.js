import React from "react";
import logo from "./logo.svg";
import _ from "./lodash/chunk.js";
import "./App.css";

function App() {
  _(["a", "b", "c", "d"], 2);
  return (
    <div className="App">
      <header className="App-header">Learn Lodash</header>
    </div>
  );
}

export default App;
