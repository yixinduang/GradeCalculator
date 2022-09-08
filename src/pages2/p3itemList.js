import React from "react";
import {
  useFinalContext,
  FinalGradeProvider,
} from "../ElementFunction/Contexts/finalContext";

export default function P3ItemList(props) {
  const { gradingComp, setGradingComp } = useFinalContext();
  const [selected, setSlection] = React.useState("Total");

  const SlectClick = (item) => {
    console.log(item);
    setSlection(item);
    // setGradingComp(prevComps=>prevComps.map(comp=>{
    //     if (comp.name !== item) return comp;
    //     return{...comp,number: comp.number-1}
    // }));
    // console.log(gradingComp);
  };

  const isSelected = (name) => {
    console.log(name);
    return selected == name;
  };

  let content = [];
  for (let i = 1; i <= props.number.number; i++) {
    let name = props.number.name;
    content.push(
      <div
        class={isSelected(name + i) ? "selected" : "p3item-container"}
        onClick={() => SlectClick(name + i)}
      >
        <span class="item-name">{name.charAt(0) + i}</span>
        <span class="item-percentage">{props.number.percentage}</span>
        <span>%</span>
      </div>
    );
  }
  return <div class="item-list">{content}</div>;
}
