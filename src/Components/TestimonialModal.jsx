import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";
import CrossIcon from "./../assets/icons/cross.svg";

const TestimonialModal = ({
  show,
  onClose,
  description,
  title = "",
  name = "",
}) => {
  const [shouldRender, setShouldRender] = useState(show);
  const modalRef = useRef();

  useEffect(() => {
    if (show) {
      setShouldRender(true);
    }
  }, [show]);

  const handleClose = () => {
    setShouldRender(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  if (!shouldRender && !show) {
    return null;
  }

  return (
    <div
      className={`modal-overlay ${shouldRender ? "modal-open" : "modal-close"}`}
    >
      <div className="modal-container" ref={modalRef}>
        <div className="modal-title">
          <div className="name-title-container">
            <p>{name}</p>
            <p className="title">{title}</p>
          </div>

          <img
            className="close-btn"
            onClick={handleClose}
            src={CrossIcon}
            alt="cross-icon"
          />
        </div>
        <p className="modal-content">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialModal;
