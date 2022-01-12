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

  const handleKeyPress = (e) => console.log(e) || showLinks(true);

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
      <div className="Vanta-bg" id="vanta-bg" />
      <div
        className="Content-container"
        tabIndex={-1}
        onKeyPress={handleKeyPress}
      >
        {isShown && (
          <img
            loading="lazy"
            alt="Queen"
            id="profile-pic"
            src={profilePic}
            className="Profile-pic Bounce"
          />
        )}
        {!isShown && (
          <>
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
            <span className="Skip-option">
              <p>[Press any key to skip]</p>
            </span>
          </>
        )}

        {isShown && (
          <div className="Bounce">
            <>
              <span className="Titles">
                <h2>
                  Anne Pruett
                  <br /> Software Engineer | Crypto Enthusiast | Problem Killer
                  ⚒️
                </h2>
              </span>
              <div className="Intro">
                <p>
                  Hi there! My name is Anne and I'm a software engineer based in
                  San Francisco.
                  <br />
                  Right now I'm doing some consulting and short term contracts.
                </p>
              </div>
            </>
            <div className="Link-carousel">
              <img
                alt="mongoDB"
                src={mongoDBLogo}
                className="Wiggle"
                height={LINK_SIZE}
              />
              <img
                alt="expressJS logo"
                src={expressJSLogo}
                className="Wiggle"
                height={LINK_SIZE}
              />
              <img
                alt="reactJS"
                src={reactLogo}
                className="Wiggle"
                height={LINK_SIZE}
                width={LINK_SIZE}
              />
              <img
                alt="nodeJS"
                src={nodesJSLogo}
                className="Logo-padding Wiggle"
                height={LINK_SIZE_SMALL}
              />
              <img
                alt="Amazon Web Services"
                src={awsLogo}
                className="Logo-padding Wiggle"
                height={LINK_SIZE_XSMALL}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
