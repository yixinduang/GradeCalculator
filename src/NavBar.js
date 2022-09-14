import "./NavBar.css";
import React from "react";

//returns the navBar for a given paragraph
export default function Nav(props) {
  return (
    <div>
      <div className="navigation">
        <div className="icon">
          <img src="./icon.png" alt="" />
        </div>
        <div className="brand">
          <h3>Grade Calculator</h3>
        </div>
      </div>
      <div className="instruction">
        <p>{props.navigationParagraph}</p>
      </div>
    </div>
  );
}
