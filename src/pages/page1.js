import React from "react";
import { useNavigate } from "react-router-dom";

const Page1=(props)=>{
    const navigate = useNavigate();
  const navigatePage2 = () => {
    navigate('/page2');
  };


  return (
    <div className="App">

      <header>
        <img id="image" src="./icon.png" />
        <h1>Welcom to GradeCalculator!</h1>
      </header>
      <p1 id="hint">To begain, please select an option from below.</p1>

      <div class="main">
        <section class="exp">
          <h2>Cummulative Grade</h2>
          <hr id="line" />
          <div>
            <p1 >
              I want to know how much I earned so far.
            </p1>
          </div>
          <img class="aci" src="./acc1.png" />
          <botton onClick={navigatePage2}>select</botton>



          

        </section>
        <section class="exp">
          <h2>Partial Grade</h2>
          <hr id="line"/>
            <div>
              <p1>
                I know my final grade just want to calculate one unknown subject.
              </p1>
            </div>
            <img class="aci" src="./acc2.png" />
            <botton onClick={navigatePage2}>select</botton>
        </section>

      </div>

    </div>

  );
}


export default Page1;