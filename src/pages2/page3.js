import React from "react";
import { useNavigate } from "react-router-dom";
import P3Component from "./p3Component";
import Nav from "../NavBar";
import "../pages/page2.css";
import { useFinalContext } from "../ElementFunction/Contexts/finalContext";

const Page3 = () => {
  const Context = useFinalContext().gradingComp;

  const navigate = useNavigate();
  const navigatePartialGradeFinalTable = () => {
    navigate("/PartialGradeFinalTable");
  };

  return (
    <div className="pageContainer">
      <Nav
        navigationParagraph={
          "Please select the unknown partial grade wanted to be calculated"
        }
      />
      <section className="section">
        <div className="section-one-container">
          <P3Component context={Context} />

          <button id="nextButton" onClick={navigatePartialGradeFinalTable}>
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page3;
