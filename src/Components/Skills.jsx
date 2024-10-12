import React from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";
import ReactLogo from "./../assets/logos/React-logo.webp";
import JsLogo from "./../assets/logos/js-logo-removebg-preview.png";
import MongoLogo from "./../assets/logos/mongo-logo-removebg-preview.png";
import ExpressLogo from "./../assets/logos/express-logo.webp";
import NodeLogo from "./../assets/logos/node-logo-removebg-preview.png";
import TsLogo from "./../assets/logos/ts-logo-removebg-preview.png";
import StorybookLogo from "./../assets/logos/storybook-logo.png";
import MUILogo from "./../assets/logos/MUI-logo-removebg-preview.png";
import GQLLogo from "./../assets/logos/graphql-logo-removebg-preview.png";
import { SKILL_DETAILS } from "../Constants";

const Skills = () => {
  const skillSet = [
    {
      name: "React Js",
      image: ReactLogo,
      rating: 5,
      backContent: SKILL_DETAILS.REACT_JS,
    },
    {
      name: "JavaScript",
      image: JsLogo,
      rating: 5,
      backContent: SKILL_DETAILS.JAVASCRIPT,
    },
    {
      name: "Mongo Db",
      image: MongoLogo,
      rating: 3,
      backContent: SKILL_DETAILS.MONGO_DB,
    },
    {
      name: "Express Js",
      image: ExpressLogo,
      rating: 3,
      backContent: SKILL_DETAILS.EXPRESS_JS,
    },
    {
      name: "Node Js",
      image: NodeLogo,
      rating: 4,
      backContent: SKILL_DETAILS.NODE_JS,
    },
    {
      name: "TypeScript",
      image: TsLogo,
      rating: 5,
      backContent: SKILL_DETAILS.TYPESCRIPT,
    },
    {
      name: "Storybook",
      image: StorybookLogo,
      rating: 4,
      backContent: SKILL_DETAILS.STORYBOOK,
    },
    {
      name: "Material UI",
      image: MUILogo,
      rating: 5,
      backContent: SKILL_DETAILS.MUI,
    },
    {
      name: "Graphql",
      image: GQLLogo,
      rating: 4,
      backContent: SKILL_DETAILS.GRAPH_QL,
    },
  ];

  return (
    <div style={{ margin: "10% 0px" }}>
      <div>
        <p className="top-head">
          How did I get these opportunities, you ask? Well, here's my
        </p>
        <div className="heading">Skill Set</div>
        <div className="carousel-primary">
          {skillSet.map((item, index) => (
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
