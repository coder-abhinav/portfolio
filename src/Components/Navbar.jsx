import React, { useState } from "react";
import "./Navbar.css";
import { RESUME_LINK } from "../Constants";
import { openLink } from "../helper";
const Navbar = ({ homeRef, experienceRef, testimonialsRef }) => {
  const width = window.innerWidth;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (key) => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
    if (key === "home") {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (key === "experience") {
      experienceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
    if (key === "testimonial") {
      testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = () => {
    openLink(RESUME_LINK);
  };

  return (
    <nav className="navbar">
      <ul className={isMobileMenuOpen ? "nav-links mobile-menu" : "nav-links"}>
        <li>
          <p onClick={() => scrollToSection("home")}>Home</p>
        </li>
        <li>
          <p onClick={() => scrollToSection("experience")}>About</p>
        </li>
        {width > 700 && (
          <li>
            <p onClick={() => scrollToSection("testimonial")}>Testimonials</p>
          </li>
        )}
        <li>
          <p onClick={() => handleResumeClick()}>Resume</p>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMobileMenu}>
        {/* Hamburger menu icon */}
        <span className={`bar bar1 ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`bar bar2 ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`bar bar3 ${isMobileMenuOpen ? "open" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
