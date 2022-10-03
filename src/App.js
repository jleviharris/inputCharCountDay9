import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [string, setString] = useState("");
  const [answer, setAnswer] = useState("");

  const checkChar = (string) => {
    const tempString = string.split(" ").join("");
    console.log(tempString);
    setAnswer(`"${string}" has ${tempString.length} characters`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkChar(string);
  };

  return (
    <div className="App">
    <div className="container">
      <h1>Input Character Counter</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          value={string}
          onChange={(e) => setString(e.target.value)}
        ></input>
        <button className="bttn">Check</button>
      </form>
      <div className="answer">{answer}</div>
    </div>
    </div>
  );
}

export default App;
