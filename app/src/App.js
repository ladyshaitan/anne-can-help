import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import logo from "./logo.svg";
import "./App.css";
import "./css/social-circles.css";
import profilePic from "./profile_pic.jpeg";
import reactLogo from "./logo.svg";
import expressJSLogo from "./express-js-logo.svg";
import mongoDBLogo from "./mongodb-logo.svg";
import nodesJSLogo from "./nodejs-logo.svg";
import awsLogo from "./aws-logo.svg";

const App = () => {
  const isSmallViewport = window.innerWidth < 420;
  const viewportHeight = window.innerHeight;
  const [isShown, showLinks] = useState(false);

  const handleKeyPress = () => !isShown && showLinks(true);
  const handleClick = () => isSmallViewport && showLinks(true);

  document.addEventListener("keypress", handleKeyPress, { once: true });
  document.addEventListener("click", handleClick, { once: true });

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
  const LINK_SIZE_XSMALL = "60px";

  const HEIGHT_CUTOFF = 750;

  const maybeAddHeight =
    viewportHeight <= HEIGHT_CUTOFF ? { height: `${viewportHeight}px` } : {};

  return (
    <div className="Page" style={{ ...maybeAddHeight }}>
      <div className="Vanta-bg" id="vanta-bg" />
      <div className="Content-container">
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
            <span className="Skip-option Floating">
              <p>[Press {isSmallViewport ? "" : "any key"} to skip]</p>
            </span>
          </>
        )}

        {isShown && (
          <img
            loading="lazy"
            alt="Queen"
            id="profile-pic"
            src={profilePic}
            className="Profile-pic Bounce"
          />
        )}

        {isShown && (
          <div className="Bounce">
            <>
              <div className="Social-media-links"></div>
              <span className="Titles">
                {isSmallViewport ? (
                  <>
                    <h2>
                      <a
                        class="icon-github color"
                        href="https://github.com/ladyshaitan"
                      ></a>
                      &nbsp; Anne Pruett&nbsp;
                      <a
                        class="icon-linkedin color "
                        href="https://linkedin.com/in/helloannepruett"
                      ></a>
                    </h2>

                    <p>
                      🔧&nbsp;Software Engineer <br /> 🔒&nbsp;Crypto Enthusiast
                      <br />
                      🗡&nbsp;Problem Killer
                    </p>
                  </>
                ) : (
                  <>
                    <h2 style={{ "margin-bottom": 0 }}>
                      <a
                        class="icon-github color"
                        href="https://github.com/ladyshaitan"
                      ></a>
                      &nbsp; Anne Pruett &nbsp;
                      <a
                        class="icon-linkedin color"
                        href="https://linkedin.com/in/helloannepruett"
                      ></a>
                    </h2>

                    <br />
                    <h2 style={{ "margin-top": 0 }}>
                      {" "}
                      🔧&nbsp;Software Engineer 🔒&nbsp;Crypto Enthusiast
                      🗡&nbsp;Problem Killer
                    </h2>
                  </>
                )}
              </span>
              <div className="Intro">
                <p>
                  Hi there! My name is Anne and I'm a software engineer based in
                  San Francisco.
                  <br />
                  Need an extra pair of hands for your project? <br />
                  I'm doing some consulting and contract work right now, reach
                  out to me on LinkedIn and lets chat!
                </p>
              </div>
            </>
            <div className="Link-carousel">
              <img
                alt="mongoDB"
                src={mongoDBLogo}
                className="Wiggle"
                height={isSmallViewport ? LINK_SIZE_XSMALL : LINK_SIZE}
              />
              <img
                alt="expressJS logo"
                src={expressJSLogo}
                className="Wiggle"
                height={isSmallViewport ? LINK_SIZE_XSMALL : LINK_SIZE}
              />
              <img
                alt="reactJS"
                src={reactLogo}
                className="Wiggle"
                height={isSmallViewport ? LINK_SIZE_XSMALL : LINK_SIZE}
                width={isSmallViewport ? LINK_SIZE_XSMALL : LINK_SIZE}
              />
              <img
                alt="nodeJS"
                src={nodesJSLogo}
                className="Logo-padding Wiggle"
                height={isSmallViewport ? LINK_SIZE_XSMALL : LINK_SIZE}
              />
              <img
                alt="Amazon Web Services"
                src={awsLogo}
                className="Logo-padding Wiggle"
                height={LINK_SIZE_XSMALL}
              />
            </div>
            <div>
              <p>
                This site was built using Git, AWS (EC2 instance, Elastic IP
                address, CodeCommit, CodeDeploy), NGINX, Certbot, Vanta, and
                ReactJS.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
