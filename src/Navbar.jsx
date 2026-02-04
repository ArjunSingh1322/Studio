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
  <img src="https://i.pinimg.com/originals/43/f8/2c/43f82cfe13272af0e2e70ddc4dadb3a0.png" alt="nature" />
  <img src="https://omghitched.com/wp-content/uploads/2024/05/v2-bb12r-a5o63.jpg" alt="forest" />
  <img src="https://thelane.com/wp-content/uploads/2023/05/Suzy-Jimmy-Wedding-1-scaled.jpg" alt="mountain" />
</div>

      </nav>

      
      <Gallery />
    </>
  );
};

export default Navbar;
