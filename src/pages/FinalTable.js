import Nav from "../NavBar";
import { useFinalContext } from "../ElementFunction/Contexts/finalContext";
import "./table.css";
import React from "react";

const FinalTable = () => {
  const { gradingComp, setGradingComp } = useFinalContext();

  const [totalScore, setTotalScore] = React.useState(0);

  const [componentList, setList] = React.useState([]);

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

  /////////////////

  function handleChange(event) {
    componentList.map((c) => {
      if (c.cname == event.target.name) {
        c.score = Number(event.target.value);
      }
    });

    console.log(componentList);

    //get the sum

    const gradelist = componentList.map((c) => (c.score * c.cpercenatge) / 100);

    let sum = gradelist.reduce((acc, comp) => {
      console.log(comp);

      return acc + comp;
    }, 0);

    setTotalScore(sum);
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
        </table>

        <table id="total">
          <tr>
            <th id="firstBody">total Score</th>
            <th id="body">{totalScore}</th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default FinalTable;
