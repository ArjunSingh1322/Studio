import React from "react";
import Budget from "./Budget";


const Gallery = () => {
  return (
    <>
      <section className="contact-container">
<marquee className="studio-marquee" behavior="scroll" direction="left" scrollamount="8">
   Welcome to <span>Moonlight Wedding Studio</span> 
  | Cinematic Wedding Shoots 
  | Pre-Wedding Photography 
  | Luxury Albums  
  | Book Your Memories With Us Today 
</marquee>
        <div className="photo-grid">
          <img src="../public/images/grid_1.jpg" alt="Photography 1" />
          <img src="../public/images/grid_2.jpg" alt="Photography 2" />
          <img src="../public/images/grid_3.jpg" alt="Photography 3" />
          <img src="../public/images/grid_4.jpg" alt="Photography 4" />
          <img src="../public/images/grid_5.jpg" alt="Photography 5" />
          <img src="../public/images/grid_6.png" alt="Photography 6" />
         <img src=" ../public/images/grid_7.webp"alt="Photography 7" />
           <img src="../public/images/grid_8.jpeg"alt="Photography 7" />

        </div>
      </section>

      <Budget />
    </>
  );
};

export default Gallery;
