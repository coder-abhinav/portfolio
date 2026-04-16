import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Experience from "./Experience";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

function useHashScrollIntoView() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }
    const raw = location.hash.replace(/^#/, "");
    if (!raw) {
      return;
    }
    const el = document.getElementById(raw);
    if (!el) {
      return;
    }
    const rafId = window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(rafId);
  }, [location.pathname, location.hash]);
}

const PortfolioPage = () => {
  const width = window.innerWidth;
  const location = useLocation();
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const testimonialsRef = useRef(null);
  const hiddenElementsRef = useRef([]);

  useHashScrollIntoView();

  useEffect(() => {
    if (location.pathname !== "/" || location.hash) {
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const hiddenElements = hiddenElementsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenElements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      hiddenElements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const addToRef = (el) => {
    if (el && !hiddenElementsRef.current.includes(el)) {
      hiddenElementsRef.current.push(el);
    }
  };

  return (
    <div className="App">
      <div className="hidden" ref={addToRef}>
        <Navbar />
      </div>
      <div className="hidden" ref={addToRef}>
        <Intro scrollRef={homeRef} />
      </div>
      <div className="hidden" ref={addToRef}>
        <Experience scrollRef={experienceRef} />
      </div>
      <div className="hidden" ref={addToRef}>
        <Skills />
      </div>
      {width > 700 && (
        <div className="hidden" ref={addToRef}>
          <Testimonial scrollRef={testimonialsRef} />
        </div>
      )}
      <div className="hidden" ref={addToRef}>
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioPage;
