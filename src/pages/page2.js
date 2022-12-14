import React from "react";
import { useNavigate } from "react-router-dom";
import Component from "../ElementFunction/Component";
import Nav from "../NavBar";
import "./page2.css";
import { Modal } from "../ElementFunction/AddComponents/Modal";
import { useFinalContext } from "../ElementFunction/Contexts/finalContext";
import { useState } from "react";
const Page2 = () => {
  const [showModel, setShowModel] = useState(false);
  const Context = useFinalContext().gradingComp;

  const openModel = () => {
    setShowModel((prev) => !prev);
  };

  const navigate = useNavigate();
  const navigatePage3 = () => {
    navigate("/FinalTable");
  };

  return (
    <div className="pageContainer">
      <Nav
        navigationParagraph={
          "Please enter the percentages as stated in the syllabus"
        }
      />
      <section className="section">
        <div className="section-one-container">
          <Component c={Context} />

          <div className="component" id="add-column">
            <div>
              <h2 className="component-title">Add</h2>
              <hr id="line" />
              <div className="add-column-button" onClick={openModel}>
                <h1 className="add-icon">+</h1>
              </div>
            </div>
          </div>

          <button id="nextButton" onClick={navigatePage3}>
            Next
          </button>
          <Modal showModel={showModel} setShowModel={setShowModel} />
        </div>
      </section>
    </div>
  );
};

export default Page2;
