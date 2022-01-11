import React from "react";
import Typewriter from "typewriter-effect";
import logo from "./logo.svg";
import "./App.css";
import profilePic from "./profile_pic.jpeg";

const App = () => {
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
          loading="lazy"
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
              .pauseFor(1200)
              .deleteChars(10)
              .pauseFor(240)
              .changeDeleteSpeed(50)
              .deleteChars(9)
              .pauseFor(1300)
              .changeDelay(200)
              .typeString("Anne")
              .pauseFor(2000)
              .typeString(" 🚀")
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default App;
