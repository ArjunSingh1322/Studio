import Navbar from "./Navbar";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { useState } from "react";
import Budget from "./Budget";
import { useNavigate } from "react-router-dom";

const Home = () => {

  let [contactOpen, setContactOpen] = useState(false);
  let [budgetOpen, setBudgetOpen] = useState(false); // kept but unused (your structure)

  const navigate = useNavigate();

  return (
    <>
      <Navbar setContactOpen={setContactOpen} />

      <div className="home">

        <div className="logo">
          <div>M</div><div>O</div><div>M</div><div>E</div><div>N</div>
          <div>T</div><div>C</div><div>A</div><div>P</div>
          <div>T</div><div>U</div><div>R</div><div>E</div>
        </div>

        <div className="quots">
          <p>
            The world keeps moving, people keep changing,<br />
            my camera makes the moments stay.
          </p>
        </div>

     
      </div>

      <Gallery />

    </>
  );
};

export default Home;
