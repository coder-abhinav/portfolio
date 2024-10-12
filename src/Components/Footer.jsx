import React from "react";
import SocialMedia from "./SocialMedia";
import "./Footer.css";
import { QUOTE } from "../Constants";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2>Thanks for visiting! 🙏</h2>
        <p className="quote-message">{QUOTE.MESSAGE}</p>
        <p className="quote-by"> - {QUOTE.AUTHOR}</p>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
