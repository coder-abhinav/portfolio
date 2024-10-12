import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { useSelector } from "react-redux";
import { TESTEMONIALS } from "../Constants";
import "./Testimonial.css";

const Testimonial = ({ scrollRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRowRef = useRef(null);
  const maxIndex = TESTEMONIALS.length;
  const modalState = useSelector(
    (state) => state.testimonial.isTestimonialModalOpen
  );

  useEffect(() => {
    const updateSlide = () => {
      if (modalState) {
        return;
      }
      const mainWidth = scrollRef.current.offsetWidth;
      const translateValue = currentIndex * -mainWidth;
      slideRowRef.current.style.transform = `translateX(${translateValue}px)`;
    };

    updateSlide();
    window.addEventListener("resize", updateSlide);

    return () => {
      window.removeEventListener("resize", updateSlide);
    };
  }, [currentIndex, modalState, scrollRef]);

  useEffect(() => {
    if (modalState) {
      return;
    }
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex + 1 < maxIndex ? prevIndex + 1 : 0;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [modalState, maxIndex]);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <main ref={scrollRef}>
      <div className="heading-container">
        <p className="top-head">
          Afraid of "what people might think", I often wonder what they actually
          think about me. Let’s hear it from them.
        </p>
        <h1>Testimonials</h1>
      </div>
      <div className="slider">
        <div className="slide-row" ref={slideRowRef}>
          {TESTEMONIALS.map((testimonial, index) => (
            <TestimonialCard
              text={testimonial.content}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="indicator">
        {TESTEMONIALS.map((_, index) => (
          <span
            key={index}
            className={`btn ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleButtonClick(index)}
          ></span>
        ))}
      </div>
    </main>
  );
};

export default Testimonial;
