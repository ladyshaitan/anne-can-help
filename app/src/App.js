import React from "react";
import Typewriter from "typewriter-effect";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  if (process.env.REACT_APP_UNDER_CONSTRUCTION === "true") {
    console.log({
      REACT_APP_UNDER_CONSTRUCTION: process.env.REACT_APP_UNDER_CONSTRUCTION,
      result: !process.env.REACT_APP_UNDER_CONSTRUCTION,
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Anne's website is under construction ⚒️</p>
        </header>
      </div>
    );
  }
  return (
    <div>
      <div alt="" className="vanta-bg" id="vanta-bg" />
      <div className="Typewriter-container">
        <Typewriter
          options={{
            wrapperClassName: "Typewriter",
            strings: ["Hello world...", "This is Anne", "Is anyone there...?"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default App;
