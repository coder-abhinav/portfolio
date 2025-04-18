import React, { useState } from "react";
import "./Testimonial.css";
import { openLink, truncate } from "../helper";
import TestimonialModal from "./TestimonialModal";
import { useDispatch } from "react-redux";
import { setIsTestimonialModalOpen } from "../Reducers/TestimonialsSlice";

const TestimonialCard = ({
  name = "",
  title = "",
  text = "",
  link = "",
  image,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(setIsTestimonialModalOpen(true));
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    dispatch(setIsTestimonialModalOpen(false));
  };

  const redirectToLinkedIn = (profileLink) => {
    openLink(profileLink);
  };

  return (
    <div className="slide-col">
      <div className="content">
        <p className="text">
          {truncate(text, 200)}{" "}
          <span
            onClick={() => handleModalOpen()}
            role="button"
            tabIndex={-1}
            className="modal-btn"
          >
            Read more
          </span>
        </p>
        <h2
          onClick={() => redirectToLinkedIn(link)}
          className="testimonial-name"
        >
          {name}
        </h2>
        <p className="testimonial-title">{title}</p>
      </div>
      <div className="hero">
        <img src={image} alt={name} />
      </div>
      {isModalOpen && (
        <TestimonialModal
          show={isModalOpen}
          onClose={() => handleModalClose()}
          description={text}
          name={name}
          title={title}
        />
      )}
    </div>
  );
};

export default TestimonialCard;
