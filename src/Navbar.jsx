import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Contact from "./Contact";

const Navbar = () => {

  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  // 🔥 CLOSE CONTACT WHEN ROUTE CHANGES
  useEffect(() => {
    setContactOpen(false);
  }, [location.pathname]);

  // Lock scroll only when contact open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", contactOpen);
  }, [contactOpen]);

  return (
    <>
      <div className="top-navbar">

        {/* <div className="nav-logo">Studio</div> */}

        <div className="nav-links">

          <NavLink to="/">Home</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/budget">Budget</NavLink>

          <span
            className="contact-link"
            onClick={() => setContactOpen(true)}
          >
            Contact
          </span>

        </div>
      </div>

      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Navbar;
