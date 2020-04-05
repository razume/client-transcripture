import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
// hi
function App() {
  return (
    <div className="App">
      <button onClick={() => axios.get("https://tranbackend.herokuapp.com/")}>
        Click me
      </button>
    </div>
  );
}

export default App;
