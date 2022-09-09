import React from "react";
import { useNavigate } from "react-router-dom";
import P3Component from "./p3Component";
import Nav from "../NavBar";
import "../pages/page2.css";
import { useFinalContext } from "../ElementFunction/Contexts/finalContext";
import { useState } from "react";
const Page3 = (props) => {
  const [showModel, setShowModel] = useState(false);
  const openModel = () => {
    setShowModel((prev) => !prev);
  };

  const Context1 = useFinalContext().gradingComp;

  const navigate = useNavigate();
  const navigatePartialGradeFinalTable = () => {
    navigate("/PartialGradeFinalTable");
  };

  return (
    <div class="pageContainer">
      <Nav
        np={"Please select the unknown partial grade wanted to be calculated"}
      />
      <section class="section">
        <div class="section-one-container">
          <P3Component c={Context1} />

          <button id="nextButton" onClick={navigatePartialGradeFinalTable}>
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page3;
