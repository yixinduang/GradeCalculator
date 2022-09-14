import React from "react";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();
  const navigatePage2 = () => {
    navigate("/page2");
  };

  const navigatePartialPage2 = () => {
    navigate("/partialGradepage2");
  };

  return (
    <div className="App">
      <header>
        <img id="image" src="./icon.png" alt="icon" />
        <h1>Welcom to GradeCalculator!</h1>
      </header>
      <div id="hint">To begain, please select an option from below.</div>

      <div className="main">
        <section className="exp">
          <h2>Cummulative Grade</h2>
          <hr id="line" />
          <div>
            <div>I want to know how much I earned so far.</div>
          </div>
          <img className="aci" src="./acc1.png" alt="accumulative" />
          <button className="botton" onClick={navigatePage2}>
            select
          </button>
        </section>
        <section className="exp">
          <h2>Partial Grade</h2>
          <hr id="line" />
          <div>
            <div>
              I know my final grade just want to calculate one unknown subject.
            </div>
          </div>
          <img className="aci" src="./acc2.png" alt="partial" />
          <button className="botton" onClick={navigatePartialPage2}>
            select
          </button>
        </section>
      </div>
    </div>
  );
};

export default Page1;
