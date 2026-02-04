import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
const Budget=()=>{


    return(
        <div>
<div className="budget container">
<div className="div1"></div>
<div className="div2">
    <div className="pricing guid">
        <h1>___PRICING GUID___</h1>
        <p>pricing guid</p>
    </div>

<section className="budget-row">

  <div className="budget-item">
    <div className="budget1">
      <div className="a">
        <div className="innera">#1</div>
      </div>
    </div>

  <h2>Full Wedding</h2>
<p>80,000/-</p>
<p>
  Complete wedding photography<br></br> coverage 
  All wedding <br></br>functions & palace<br></br> coverage included 
  Gallery <br></br> and premium edits provided
</p>

  </div>

  <div className="budget-item">
    <div className="budget1">
      <div className="a b">
        <div className="innera">#2</div>
      </div>
    </div>

    <h2>Full Photoshoot</h2>
<p>50,000/-</p>
<p>
  End-to-end professional<br></br> photoshoot
  Travel, location<br></br> arrangements & meals included <br />
  Advanced editing<br></br> and final delivery
</p>


  </div>
   <div className="budget-item">
    <div className="budget1">
      <div className="a c">
        <div className="innera">#3</div>
      </div>
    </div>

   <h2>Product Shoot</h2>
<p>25,000/-</p>
<p>
  High-quality product<br></br> photography <br />
  Studio & outdoor shoots<br></br> included 
  Professional<br></br> lighting & editing
</p>
<h3>Moment Capture</h3>
<p id="para">Capture the Moment. Cherish Forever.</p>

  </div>

</section>


</div>

<div className="div3"></div>


</div>
{/* <Contact /> */}
<Footer/>
</div>

    )
}
export default Budget