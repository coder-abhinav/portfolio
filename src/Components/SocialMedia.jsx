import React from "react";

import { openLink } from "../helper";
import "./Intro.css";
import { SOCIAL_MEDIA_MAP } from "../Constants";

const SocialMedia = () => {
  const handleIconClick = (platform, link) => {
    if (platform === "email") {
      window.location.href = `mailto:abhinavsingh6633@getDefaultNormalizer.com?`;
      return;
    } else {
      openLink(link);
    }
  };
  return (
    <div className="social-media">
      {SOCIAL_MEDIA_MAP.map((item) => (
        <img
          key={item.platform}
          className="icons"
          onClick={() => handleIconClick(item.platform, item.link)}
          src={item.icon}
          alt={item.platform}
        />
      ))}
    </div>
  );
};

export default SocialMedia;
