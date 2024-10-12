import React from "react";
import LinkImage from "./../assets/icons/link.svg";
import "./Experience.css";
import { openLink } from "../helper";

const CompanyDetails = ({
  name = "",
  dates = "",
  details = [],
  link = "",
  post = "",
}) => {
  const handleLinkClick = () => {
    openLink(link);
  };

  return (
    <div className="company">
      <div className="company-name">
        <h2>{name}</h2>
        {link.length ? (
          <img
            className="company-link"
            src={LinkImage}
            alt="link"
            onClick={() => {
              handleLinkClick();
            }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="position">{post}</div>
      <div className="dates">{dates}</div>
      <ul>
        {details.length &&
          details.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default CompanyDetails;
