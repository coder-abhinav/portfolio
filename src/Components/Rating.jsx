import React from "react";

const Rating = ({ rating }) => {
  function Star({ filled }) {
    return <span style={{ color: filled ? "gold" : "gray" }}>★</span>;
  }

  return (
    <div style={{ display: "flex" }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
};

export default Rating;
