import React from "react";
import "./Component.css";
import ItemList from "./itemList";
import { useFinalContext } from "./Contexts/finalContext";

const SetComponent = (props) => {
  //console.log(props);

  const { gradingComp, setGradingComp } = useFinalContext();

  //console.log(gradingComp);

  const HandleClick = (item) => {
    setGradingComp((prevComps) =>
      prevComps.map((comp) => {
        if (comp.name !== item) return comp;
        return { ...comp, number: Number(comp.number) + 1 };
      })
    );
    //console.log(gradingComp);
  };

  const ColseContainer = (item) => {
    setGradingComp((prevComps) =>
      prevComps.filter((comp) => {
        return comp.name !== item;
      })
    );
    //console.log("closed");
  };

  return (
    <div className="component" key={props.name}>
      <span className="close" onClick={() => ColseContainer(props.name)}>
        &times;
      </span>
      <div>
        <h1 className="component-title">{props.name}</h1>
        <div className="component-subtitle">
          <span className="component-percentage">{props.percentage}</span>
          <span>% Each</span>
        </div>
      </div>
      <hr id="line" />
      <div>
        <ItemList number={props} />
      </div>
      <div className="add-item-button-container">
        <button
          className="add-item-button"
          onClick={() => HandleClick(props.name)}
        >
          + add item{" "}
        </button>
      </div>
    </div>
  );
};

export default function Component(props) {
  return props.c.map((c) => SetComponent(c));
}
