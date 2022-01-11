import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import logo from "./logo.svg";
import "./App.css";
import profilePic from "./profile_pic.jpeg";
import reactLogo from "./logo.svg";
import expressJSLogo from "./express-js-logo.svg";
import mongoDBLogo from "./mongodb-logo.svg";
import nodesJSLogo from "./nodejs-logo.svg";
import awsLogo from "./aws-logo.svg";

const App = () => {
  const [isShown, showLinks] = useState(false);

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

  const LINK_SIZE = "100px";
  const LINK_SIZE_SMALL = "80px";
  const LINK_SIZE_XSMALL = "60px";

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
              .changeDelay(60)
              .typeString("Hello, I'm a software engineer")
              .pauseFor(500)
              .changeDeleteSpeed(1)
              .deleteChars(17)
              .pauseFor(800)
              .changeDelay(60)
              .typeString("crypto enthusiast")
              .pauseFor(700)
              .deleteChars(19)
              .pauseFor(1000)
              .changeDelay(110)
              .typeString("Anne")
              .pauseFor(180)
              .typeString(" 🚀")
              .pauseFor(500)
              .callFunction(() => showLinks(true))
              .start();
          }}
        />
        {isShown && (
          <div className="Link-carousel">
            <img
              alt="mongoDB"
              src={mongoDBLogo}
              className="Logo-icon"
              height={LINK_SIZE}
            />
            <img
              alt="expressJS logo"
              src={expressJSLogo}
              className="Logo-icon"
              height={LINK_SIZE}
            />
            <img
              alt="reactJS"
              src={reactLogo}
              className="Logo-icon"
              height={LINK_SIZE}
              width={LINK_SIZE}
            />
            <img
              alt="nodeJS"
              src={nodesJSLogo}
              className="Logo-icon Logo-padding"
              height={LINK_SIZE_SMALL}
            />
            <img
              alt="Amazon Web Services"
              src={awsLogo}
              class=""
              className="Logo-icon Logo-padding"
              height={LINK_SIZE_XSMALL}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
