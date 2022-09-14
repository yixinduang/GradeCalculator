import React from "react";

export default function P3ItemList(props) {
  const [selected, setSlection] = React.useState("Total");

  const SlectClick = (item) => {
    setSlection(item);
  };

  const isSelected = (name) => {
    return selected == name;
  };

  let content = [];
  for (let i = 1; i <= props.number.number; i++) {
    let name = props.number.name;
    content.push(
      <div
        className={isSelected(name + i) ? "selected" : "p3item-container"}
        onClick={() => SlectClick(name + i)}
      >
        <span className="item-name">{name.charAt(0) + i}</span>
        <span className="item-percentage">{props.number.percentage}</span>
        <span>%</span>
      </div>
    );
  }
  return <div className="item-list">{content}</div>;
}
