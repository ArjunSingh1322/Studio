import React, { useState, useEffect } from "react";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact";
import Budget from "./Budget.jsx"; // ✅ create this component

import mimg1 from "../assets/Mgrid_1.png";
import mimg2 from "../assets/Mgrid_2.jpg";
import mimg3 from "../assets/Mgrid_3.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("gallery"); // gallery | budget

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      <nav>
        <div className="navbar">
          <button onClick={() => window.location.hash = "gallery"}>
  Gallery
</button>

<button onClick={() => window.location.hash = "budget"}>
  Budget
</button>

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

      
      {/* {page === "gallery" && <Gallery />} */}
      {/* {page === "budget" && <Budget />} */}
    </>
  );
};

export default Navbar;
