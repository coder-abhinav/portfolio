import React from "react";
import "./Intro.css";
import IntroImage from "./../assets/images/intro-image.jpeg";
import SocialMedia from "./SocialMedia";
import { PROFILE_SUMMARY } from "../Constants";

const Intro = ({ scrollRef }) => {
  return (
    <div ref={scrollRef} className="intro-container">
      <div className="intro-image-container">
        <img className="intro-image" src={IntroImage} alt="abhinav" />
      </div>
      <div className="wrapper">
        Hi, I am{" "}
        <p className="flip">
          <div> Abhinav </div>
          <div>अभिनव </div>
          <div> アビナヴ </div>
        </p>
      </div>
      <div style={{ textAlign: "center", padding: "10px" }}>
        {PROFILE_SUMMARY}
      </div>
      <SocialMedia />
    </div>
  );
};

export default Intro;
