import React from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";

import { SKILL_SET } from "../Constants";

const Skills = () => {
  return (
    <div style={{ margin: "10% 0px" }}>
      <div>
        <p className="top-head">
          How did I get these opportunities, you ask? Well, here's my
        </p>
        <div className="heading">Skill Set</div>
        <div className="carousel-primary">
          {SKILL_SET.map((item, index) => (
            <SkillCard
              image={item.image}
              skillName={item.name}
              rating={item.rating || 1}
              key={index}
              backContent={item.backContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
