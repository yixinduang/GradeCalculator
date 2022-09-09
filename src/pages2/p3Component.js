import React from "react";
import "./p3Component.css";
import {
  useFinalContext,
  FinalGradeProvider,
} from "../ElementFunction/Contexts/finalContext";

import { useSelectionContext } from "../ElementFunction/Contexts/selectionContext";

export default function P3Component(props) {
  const { gradingComp, setGradingComp } = useFinalContext();
  const { selected, setSlection } = useSelectionContext();

  const SetComponent = (props) => {
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

  return props.c.map((c) => SetComponent(c));
}
