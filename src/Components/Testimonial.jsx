import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { useSelector } from "react-redux";
import { TESTEMONIALS } from "../Constants";
import "./Testimonial.css";

const SLIDE_COUNT = TESTEMONIALS.length;
const CLONE_INDEX = SLIDE_COUNT;

const Testimonial = ({ scrollRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRowRef = useRef(null);
  const modalState = useSelector(
    (state) => state.testimonial.isTestimonialModalOpen
  );

  const slides = [...TESTEMONIALS, TESTEMONIALS[0]];

  useEffect(() => {
    const updateSlide = () => {
      if (modalState || !scrollRef?.current || !slideRowRef.current) {
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
    const row = slideRowRef.current;
    if (!row || modalState) {
      return;
    }

    const snapToRealStart = () => {
      row.style.transition = "none";
      row.style.transform = "translateX(0)";
      void row.offsetHeight;
      setCurrentIndex(0);
      requestAnimationFrame(() => {
        row.style.transition = "";
      });
    };

    const handleTransitionEnd = (e) => {
      if (e.target !== row || e.propertyName !== "transform") {
        return;
      }
      if (currentIndex === CLONE_INDEX) {
        snapToRealStart();
      }
    };

    row.addEventListener("transitionend", handleTransitionEnd);
    return () => row.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, modalState]);

  useEffect(() => {
    if (modalState) {
      return;
    }
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < CLONE_INDEX ? prevIndex + 1 : prevIndex
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [modalState]);

  const handleButtonClick = (index) => {
    if (currentIndex === CLONE_INDEX) {
      const row = slideRowRef.current;
      if (row) {
        row.style.transition = "none";
        row.style.transform = "translateX(0)";
        void row.offsetHeight;
        row.style.transition = "";
      }
    }
    setCurrentIndex(index);
  };
  return (
    <main id="testimonials" ref={scrollRef}>
      <div className="heading-container">
        <p className="top-head">
          Afraid of "what people might think", I often wonder what they actually
          think about me. Let’s hear it from them.
        </p>
        <div className="heading">Testimonials</div>
      </div>
      <div className="slider">
        <div className="slide-row" ref={slideRowRef}>
          {slides.map((testimonial, index) => (
            <TestimonialCard
              text={testimonial.content}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              link={testimonial.link}
              key={index === CLONE_INDEX ? "clone-0" : index}
              ariaHidden={index === CLONE_INDEX}
            />
          ))}
        </div>
      </div>
      <div className="indicator">
        {TESTEMONIALS.map((_, index) => (
          <span
            key={index}
            className={`btn ${
              currentIndex % SLIDE_COUNT === index ? "active" : ""
            }`}
            onClick={() => handleButtonClick(index)}
          ></span>
        ))}
      </div>
    </main>
  );
};

export default Testimonial;
