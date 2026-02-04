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
          <img src="https://www.dipakstudios.com/gallery/1535303839A36I7935-Edit.jpg" alt="Photography 1" />
          <img src="https://images.pexels.com/photos/992711/pexels-photo-992711.jpeg?cs=srgb&dl=pexels-i-gede-karsa-992711.jpg&fm=jpg" alt="Photography 2" />
          <img src="https://weddingaffair.co.in/wp-content/uploads/2022/05/feature-10.jpg" alt="Photography 3" />
          <img src="https://nishaannagaara.com/wp-content/uploads/2022/04/DSC_09532-scaled.jpg" alt="Photography 4" />
          <img src="https://lh3.googleusercontent.com/uH_eJI8S0i5QXPTPDQ8QYynC5xefkhkG0EGMRx0F7a7TFN9DS7PZETafDZxGq5vWrbSL5pk3b1FqO5CN_ln-ND7nQNQ=w1000" alt="Photography 5" />
          <img src="https://www.masala.com/cloud/2023/08/04/5pTPifFx-image-1-1000x556.png" alt="Photography 6" />
         <img src=" https://images.lifestyleasia.com/wp-content/uploads/2018/11/30172346/Mehendi51.jpg"alt="Photography 7" />
           <img src="https://www.varmalla.com/wp-content/uploads/2023/11/103587-weddingnama3.jpeg"alt="Photography 7" />

        </div>
      </section>

      <Budget />
    </>
  );
};

export default Gallery;
