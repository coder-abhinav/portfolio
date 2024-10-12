import React from "react";
import Email from "./../assets/icons/email.svg";
import Linkedin from "./../assets/icons/linkedin.svg";
import Instagram from "./../assets/icons/instagram.svg";
import Whatsapp from "./../assets/icons/whatsapp.svg";
import { openLink } from "../helper";
import "./Intro.css";

const SocialMedia = () => {
  const handleIconClick = (platform) => {
    if (platform === "email") {
      window.location.href = `mailto:abhinavsingh6633@getDefaultNormalizer.com?`;
      return;
    }
    if (platform === "insta") {
      openLink("https://www.instagram.com/rajputabhinav654/");
      return;
    }
    if (platform === "linkedin") {
      openLink("https://linkedin.com/in/abhinavsingh654/");
      return;
    }
    if (platform === "whatsapp") {
      openLink("wa.me/+918587093885");
      return;
    }
  };
  return (
    <div className="social-media">
      <img
        className="icons"
        onClick={() => handleIconClick("email")}
        src={Email}
        alt="email"
      />
      <img
        className="icons"
        onClick={() => handleIconClick("linkedin")}
        src={Linkedin}
        alt="linkedin"
      />
      <img
        className="icons"
        onClick={() => handleIconClick("insta")}
        src={Instagram}
        alt="instagram"
      />
      <img
        className="icons"
        onClick={() => handleIconClick("whatsapp")}
        src={Whatsapp}
        alt="whatsapp"
      />
    </div>
  );
};

export default SocialMedia;
