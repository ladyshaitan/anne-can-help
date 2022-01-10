import React from "react";
import Typewriter from "typewriter-effect";
import logo from "./logo.svg";
import "./App.css";
import profilePic from "./profile_pic.jpeg";

const App = () => {
  console.log({
    REACT_APP_UNDER_CONSTRUCTION: process.env.REACT_APP_UNDER_CONSTRUCTION,
    result: !process.env.REACT_APP_UNDER_CONSTRUCTION,
  });
  if (process.env.REACT_APP_UNDER_CONSTRUCTION === "true") {
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
      <div className="vanta-bg" id="vanta-bg" />
      <div className="Content-container">
        <img
          alt="Queen"
          id="profile-pic"
          src={profilePic}
          className="Profile-pic"
        />
        <Typewriter
          options={{
            wrapperClassName: "Typewriter",
            autoStart: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(70)
              .typeString("Hello, I'm a software engineer")
              .pauseFor(2000)
              .changeDeleteSpeed(1)
              .deleteChars(17)
              .pauseFor(1500)
              .changeDelay(60)
              .typeString("crypto enthusiast")
              .pauseFor(1500)
              .changeDeleteSpeed(100)
              .deleteChars(10)
              .pauseFor(750)
              .changeDeleteSpeed(50)
              .deleteChars(9)
              .pauseFor(2500)
              .changeDelay(100)
              .typeString("an idea brewer")
              .pauseFor(2500)
              .changeDeleteSpeed(1)
              .deleteChars(7)
              .pauseFor(700)
              .changeDeleteSpeed(100)
              .deleteChars(7)
              .pauseFor(1900)
              .changeDelay(500)
              .typeString("Anne")
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default App;
