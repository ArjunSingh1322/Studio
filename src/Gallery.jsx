import React from "react";
// import Budget from "./Budget";

import img1 from "../assets/grid_1.jpg";
import img2 from "../assets/grid_2.jpg";
import img3 from "../assets/grid_3.jpg";
import img4 from "../assets/grid_4.jpg";
import img5 from "../assets/grid_5.jpg";
import img6 from "../assets/grid_6.png";
import img7 from "../assets/grid_7.webp";
import img8 from "../assets/grid_8.jpeg";

const Gallery = () => {
  return (
    <>
      <section className="contact-container" id="gallery">

        <marquee
          className="studio-marquee"
          behavior="scroll"
          direction="left"
          scrollamount="8"
        >
          Welcome to <span>Moonlight Wedding Studio</span> 
          | Cinematic Wedding Shoots 
          | Pre-Wedding Photography 
          | Luxury Albums  
          | Book Your Memories With Us Today 
        </marquee>

        <div className="photo-grid">
          <img src={img1} alt="Photography 1" />
          <img src={img2} alt="Photography 2" />
          <img src={img3} alt="Photography 3" />
          <img src={img4} alt="Photography 4" />
          <img src={img5} alt="Photography 5" />
          <img src={img6} alt="Photography 6" />
          <img src={img7} alt="Photography 7" />
          <img src={img8} alt="Photography 8" />
        </div>

      </section>
    </>
  );
};

export default Gallery;
