import React, { useState } from "react";
import "./Skills.css";
import Rating from "./Rating";

const SkillCard = ({
  image = "",
  skillName = "",
  rating = 1,
  backContent = "",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`skill-card ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <div className="skill-card-inner">
        {/* Front Side */}
        <div className="skill-card-front">
          <img src={image} alt="logo" className="skill-logo" />
          <p>{skillName}</p>
          <Rating rating={rating} />
        </div>

        {/* Back Side */}
        <div className="skill-card-back">
          <p>{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
