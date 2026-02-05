import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Contact from "./Contact";

// ✅ Import Images
import mimg1 from "../assets/Mgrid_1.png";
import mimg2 from "../assets/Mgrid_2.jpg";
import mimg3 from "../assets/Mgrid_3.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <nav>
        <div className="navbar">
          <button>Home</button>
          <button>About</button>
          <button onClick={() => setOpen(true)}>Contact</button>
          <Contact open={open} onClose={() => setOpen(false)} />
        </div>

        <hr />

        <div className="logo">
          <span className="m">M</span>OMENT_CAPTURE
        </div>

        <div className="collage" style={{ color: "white" }}>
          <img src={mimg1} alt="grid 1" />
          <img src={mimg2} alt="grid 2" />
          <img src={mimg3} alt="grid 3" />
        </div>
      </nav>

      <Gallery />
    </>
  );
};

export default Navbar;
