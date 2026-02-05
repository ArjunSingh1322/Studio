import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup (important)
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
         <hr></hr>

        <div className="logo">
          <span className="m">M</span>OMENT_CAPTURE
        </div>
        <div className="collage" style={{ color: "white" }}>
          <img src="../public/images/Mgrid_1.png" alt="path wrong" />
  <img src="../public/images/Mgrid_2.jpg" alt="forest" />
  <img src="../public/images/Mgrid_3.jpg" alt="mountain" />
</div>

      </nav>

      
      <Gallery />
    </>
  );
};

export default Navbar;
