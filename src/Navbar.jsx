import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Lock scroll when any sidebar open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen || contactOpen);
  }, [menuOpen, contactOpen]);

  return (
    <>
      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      {/* OVERLAY */}
      <div
        className={menuOpen ? "overlay show" : "overlay"}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* SIDEBAR */}
      <div className={menuOpen ? "sidebar open" : "sidebar"}>

        <div className="close-btn" onClick={() => setMenuOpen(false)}>✖</div>

        <div className="sidebar-links">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>

          <Link to="/budget" onClick={() => setMenuOpen(false)}>Budget</Link>

          {/* CONTACT */}
          <Link
            to="#"
            onClick={() => {
              setMenuOpen(false);
              setContactOpen(true);
            }}
          >
            Contact
          </Link>

          <Link to="/footer" onClick={() => setMenuOpen(false)}>Footer</Link>

        </div>
      </div>

      {/* CONTACT SIDEBAR */}
      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Navbar;
