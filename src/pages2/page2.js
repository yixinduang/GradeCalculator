import React from "react";
import { useNavigate } from "react-router-dom";
import Component from "../ElementFunction/Component";
import Nav from "../NavBar";
import "../pages/page2.css";
import { Modal } from "../ElementFunction/AddComponents/Modal";
import { useFinalContext } from "../ElementFunction/Contexts/finalContext";
import { useState } from "react";
const Page22 = (props) => {
  const [showModel, setShowModel] = useState(false);
  const openModel = () => {
    setShowModel((prev) => !prev);
  };

  const Context1 = useFinalContext().gradingComp;

  const navigate = useNavigate();
  const navigatePage3 = () => {
    navigate("/page3");
  };

  return (
    <div className="page2-container">
      <Nav np={"Please enter the percentages as stated in the syllabus"} />
      <section class="section">
        <div class="section-one-container">
          <Component c={Context1} />

          <div class="component" id="add-column">
            <div>
              <h2 class="component-title">Add</h2>
              <hr id="line" />
              <div class="add-column-button" onClick={openModel}>
                <h1 class="add-icon">+</h1>
              </div>
            </div>
          </div>

          <button id="nextButton" onClick={navigatePage3}>
            Next
          </button>
          {/* <Modal showModel={showModel} setShowModel={setShowModel} /> */}
        </div>
        <Modal showModel={showModel} setShowModel={setShowModel} />
      </section>
    </div>
  );
};

export default Page22;
