import React from "react";
import "./p3Component.css";
import { useSelectionContext } from "../ElementFunction/Contexts/selectionContext";

export default function P3Component(props) {
  const { selected, setSlection } = useSelectionContext();

  const SetComponent = (props) => {
    const SlectClick = (item) => {
      setSlection(item);
    };

    const isSelected = (name) => {
      return selected === name;
    };

    function P3ItemList(props) {
      let content = [];
      for (let i = 1; i <= props.number.number; i++) {
        let name = props.number.name;
        content.push(
          <div
            onClick={(e) => SlectClick(name + i)}
            className={isSelected(name + i) ? "selected" : "p3item-container"}
          >
            <span className="item-name">{name.charAt(0) + i}</span>
            <span className="item-percentage">{props.number.percentage}</span>
            <span>%</span>
          </div>
        );
      }
      return <div className="item-list">{content}</div>;
    }

    return (
      <div className="component" key={props.name}>
        <div>
          <h1 className="component-title">{props.name}</h1>
          <div className="component-subtitle">
            <span className="component-percentage">{props.percentage}</span>
            <span>% Each</span>
          </div>
        </div>
        <hr id="line" />
        <div>
          <P3ItemList number={props} />
        </div>
      </div>
    );
  };

  return props.context.map((context) => SetComponent(context));
}
