import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const width = window.innerWidth;
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavInteraction = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
  };

  const sectionLinkProps = (to) => ({
    to,
    className: "nav-item",
    onClick: handleNavInteraction,
  });

  return (
    <nav className="navbar">
      <ul className={isMobileMenuOpen ? "nav-links mobile-menu" : "nav-links"}>
        <li>
          <Link
            to="/"
            className="nav-item"
            onClick={(e) => {
              handleNavInteraction();
              if (location.pathname === "/" && !location.hash) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link {...sectionLinkProps("/#experience")}>Experience</Link>
        </li>
        {width > 700 && (
          <li>
            <Link {...sectionLinkProps("/#testimonials")}>Testimonials</Link>
          </li>
        )}
        <li>
          <Link
            to="/resume"
            className="nav-item"
            onClick={handleNavInteraction}
          >
            Resume
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span className={`bar bar1 ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`bar bar2 ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`bar bar3 ${isMobileMenuOpen ? "open" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
