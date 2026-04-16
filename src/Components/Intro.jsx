import React from "react";
import "./Intro.css";
import ProfileImage from "./../assets/images/profileImg.png";
import SocialMedia from "./SocialMedia";
import { PROFILE_SUMMARY } from "../Constants";

const Intro = ({ scrollRef }) => {
  return (
    <div id="home" ref={scrollRef} className="intro-container">
      <div className="intro-image-container">
        <img className="intro-image" src={ProfileImage} alt="abhinav" />
      </div>
      <div className="wrapper">
        Hi, I am{" "}
        <span className="flip-viewport" aria-label="Name in multiple languages">
          <span className="flip-track">
            <span className="flip-item">Abhinav</span>
            <span className="flip-item">अभिनव</span>
            <span className="flip-item">アビナヴ</span>
            <span className="flip-item" aria-hidden="true">
              Abhinav
            </span>
          </span>
        </span>
      </div>
      <div style={{ textAlign: "center", padding: "10px" }}>
        {PROFILE_SUMMARY}
      </div>
      <SocialMedia />
    </div>
  );
};

export default Intro;
