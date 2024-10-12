import React from "react";
import "./Experience.css";
import CompanyDetails from "./CompanyDetails";
import { EXPERIENCES } from "../Constants";

const Experience = ({ scrollRef }) => {
  const width = window.innerWidth;

  return (
    <div ref={scrollRef} className="heading-container">
      <div>
        <p className="top-head">
          I heard someone said experience! well... here's my
        </p>
        <div className="heading"> Experience</div>
      </div>
      <div className="experience-wrapper">
        {EXPERIENCES.map((item, index) => (
          <div key={index} className="experiences">
            {width < 1200 ? (
              <>
                <div className="company-logo-container">
                  <img
                    className="company-image"
                    src={item?.image}
                    alt="compamy-image"
                  />
                </div>
                <CompanyDetails
                  name={item.name}
                  dates={item.dates}
                  link={item?.link || ""}
                  details={item.details}
                  post={item.post}
                />
              </>
            ) : index % 2 === 0 ? (
              <>
                <CompanyDetails
                  name={item.name}
                  dates={item.dates}
                  link={item?.link || ""}
                  details={item.details}
                  post={item.post}
                />
                <div className="company-logo-container">
                  <img
                    height="150px"
                    width="fit-content"
                    src={item?.image}
                    alt="compamy-image"
                    className="company-logo right"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="company-logo-container">
                  <img
                    src={item?.image}
                    alt="compamy-image"
                    className="company-logo left"
                  />
                </div>
                <CompanyDetails
                  name={item.name}
                  dates={item.dates}
                  link={item?.link || ""}
                  details={item.details}
                  post={item.post}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
