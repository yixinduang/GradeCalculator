import Nav from "../NavBar";
import { useFinalContext } from "../ElementFunction/Contexts/finalContext";
import "../pages/table.css";
import React from "react";
import { useSelectionContext } from "../ElementFunction/Contexts/selectionContext";

const PartialGradeFinalTable = () => {
  const { gradingComp, setGradingComp } = useFinalContext();
  const { selected, setSlection } = useSelectionContext();

  const [partialScore, setPartialScore] = React.useState(100);

  const [componentList, setList] = React.useState([]);

  const [selectedPercentage, setPercentage] = React.useState(0);

  const [total, setTotalScore] = React.useState(100);

  //loop for creating componentList

  React.useEffect(() => {
    for (let j = 0; j < gradingComp.length; j++) {
      const g = gradingComp[j];

      for (let i = 1; i <= g.number; i++) {
        const component = {
          cname: g.name + i,
          cpercenatge: Number(g.percentage),
          score: 0,
        };
        componentList.push(component);
      }
    }
  }, []);

  React.useEffect(() => {
    for (let i = 0; i < componentList.length; i++) {
      if (componentList[i].cname === selected) {
        setPercentage(componentList[i].cpercenatge);
      }
    }
    console.log("percentage:" + selectedPercentage);

    console.log(componentList);
  }, [selectedPercentage]);

  /////////////////////////////

  // setList((componentList) =>
  //   componentList.filter((component) => {
  //     return component.cname !== selected;
  //   })
  // );

  /////////////////

  function handleChange(event) {
    componentList.map((c) => {
      if (c.cname == event.target.name) {
        c.score = Number(event.target.value);
      }
    });

    if (event.target.name === "total") {
      setTotalScore(Number(event.target.value));
      console.log(total);
    }

    //get the sum

    const gradelist = componentList.map((c) => (c.score * c.cpercenatge) / 100);

    let sum = gradelist.reduce((acc, comp) => {
      console.log(comp);

      return acc + comp;
    }, 0);

    console.log("sum" + sum);
    console.log(selectedPercentage);

    setPartialScore(
      (((total - sum) * 100) / Number(selectedPercentage)).toFixed(2)
    );
  }

  const getSelection = (item) => {
    let sectionList = [];

    for (let i = 1; i <= item.number; i++) {
      let n = item.name;
      sectionList.push(
        <tr id="body">
          <th id="firstBody">{n.charAt(0) + i}</th>
          <th>{item.percentage + "%"}</th>
          <th>
            <input type="number" name={n + i} onChange={handleChange} />%{" "}
          </th>
        </tr>
      );
    }

    return (
      <>
        <tr id="header">
          <th id="firstHeader">{item.name}</th>
          <th>total:{item.number * item.percentage + "%"}</th>
          <th>score </th>
        </tr>
        <>{sectionList}</>
      </>
    );
  };

  const sectionContent = gradingComp.map((comp) => getSelection(comp));

  return (
    <>
      <Nav
        np={
          "Now its time to calucate your grade! enter how much you have earned out of the total below."
        }
      />

      <div id="paper">
        <table>
          <>{sectionContent}</>
          <tr id="header">
            <th id="firstHeader">TotalScore</th>
            <th>total:100%</th>
            <th>score </th>
          </tr>
          <tr id="body">
            <th id="firstBody">Total</th>
            <th>100%</th>
            <th>
              <input type="number" name="total" onChange={handleChange} />%{" "}
            </th>
          </tr>
        </table>

        <table id="total">
          <tr>
            <th id="firstBody">{selected}</th>
            <th id="body">{partialScore}</th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default PartialGradeFinalTable;
