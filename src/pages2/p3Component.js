import React from "react";
import "./p3Component.css";
import {
  useFinalContext,
  FinalGradeProvider,
} from "../ElementFunction/Contexts/finalContext";

const SetComponent = (props) => {
  const { gradingComp, setGradingComp } = useFinalContext();
  const [selected, setSlection] = React.useState("Total");

  const SlectClick = (item) => {
    setSlection(item);
    console.log("this is selected:" + item);
  };

  const isSelected = (name) => {
    console.log("checked:" + name);
    return selected === name;
  };

  function P3ItemList(props) {
    let content = [];
    for (let i = 1; i <= props.number.number; i++) {
      let name = props.number.name;
      content.push(
        <div
          onClick={(e) => SlectClick(name + i)}
          class={isSelected(name + i) ? "selected" : "p3item-container"}
        >
          <span class="item-name">{name.charAt(0) + i}</span>
          <span class="item-percentage">{props.number.percentage}</span>
          <span>%</span>
        </div>
      );
    }
    return <div class="item-list">{content}</div>;
  }

  return (
    <div class="component" key={props.name}>
      <div>
        <h1 class="component-title">{props.name}</h1>
        <div class="component-subtitle">
          <span class="component-percentage">{props.percentage}</span>
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

export default function p3Component(props) {
  return props.c.map((c) => SetComponent(c));
}
