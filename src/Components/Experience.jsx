import React, { useEffect, useState } from "react";
import "./Experience.css";
import CompanyDetails from "./CompanyDetails";
import { EXPERIENCES } from "../Constants";

const LAYOUT_BREAKPOINT_PX = 1200;

function useIsBelowWidth(breakpointPx) {
  const [isBelow, setIsBelow] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpointPx : false,
  );

  useEffect(() => {
    const update = () => setIsBelow(window.innerWidth < breakpointPx);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [breakpointPx]);

  return isBelow;
}

function ExperienceLogo({ item }) {
  return (
    <div className="company-logo-container">
      <img
        className="company-logo"
        src={item.image}
        alt={`${item.name} logo`}
      />
    </div>
  );
}

function ExperienceDetails({ item }) {
  return (
    <CompanyDetails
      name={item.name}
      dates={item.dates}
      link={item.link || ""}
      details={item.details}
      post={item.post}
    />
  );
}

function ExperienceRow({ item, index, stackVertically }) {
  const logo = <ExperienceLogo item={item} />;
  const details = <ExperienceDetails item={item} />;

  if (stackVertically) {
    return (
      <>
        {/* {logo} */}
        {details}
      </>
    );
  }

  const detailsFirst = index % 2 === 0;
  return detailsFirst ? (
    <>
      {details}
      {logo}
    </>
  ) : (
    <>
      {logo}
      {details}
    </>
  );
}

const Experience = ({ scrollRef }) => {
  const isNarrowLayout = useIsBelowWidth(LAYOUT_BREAKPOINT_PX);

  return (
    <div id="experience" ref={scrollRef} className="heading-container">
      <div>
        <p className="top-head">
          I heard someone said experience! well... here's my
        </p>
        <div className="heading"> Experience</div>
      </div>
      <div className="experience-wrapper">
        {EXPERIENCES.map((item, index) => (
          <div
            key={`${item.name}-${item.dates}-${index}`}
            className="experiences"
          >
            <ExperienceRow
              item={item}
              index={index}
              stackVertically={isNarrowLayout}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
