import React from "react";
// import Budget from "./Budget";
 import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Budget from "./Budget";
import Footer from "./Footer";
import Contact from "./Contact";
import Navbar from "./Navbar";
const App=()=>{

  return(
    <div>
      
      <Routes>
         <Route path="/" element={<Home />}/>
      <Route path="/gallery" element={<Gallery />}/>
      <Route path="/budget" element={<Budget />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/footer" element={<Footer />}/>

      </Routes>
      

    </div>
  )
}
export default App
  