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
      const comp = gradingComp[j];

      for (let i = 1; i <= comp.number; i++) {
        const component = {
          name: comp.name + i,
          percenatge: Number(comp.percentage),
          score: 0,
        };
        componentList.push(component);
      }
    }
  }, []);

  function handleChange(event) {
    componentList.map((comp) => {
      if (comp.name === event.target.name) {
        comp.score = Number(event.target.value);
      }
    });

    GetTotal();
  }

  const GetTotal = () => {
    const gradelist = componentList.map(
      (comp) => (comp.score * comp.percenatge) / 100
    );

    let sum = gradelist.reduce((acc, comp) => {
      return acc + comp;
    }, 0);

    setTotalScore(sum.toFixed(2));
  };

  const getSelection = (item) => {
    let sectionList = [];

    for (let i = 1; i <= item.number; i++) {
      let name = item.name;
      sectionList.push(
        <tr id="body">
          <th id="firstBody">{name.charAt(0) + i}</th>
          <th>{item.percentage + "%"}</th>
          <th>
            <input type="number" name={name + i} onChange={handleChange} />%{" "}
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
        navigationParagraph={
          "Now its time to calucate your grade! enter how much you have earned out of the total below."
        }
      />

      <div id="paper">
        <table>
          <tbody>
            <>{sectionContent}</>
          </tbody>
        </table>

        <table id="total">
          <tbody>
            <tr>
              <th id="firstBody">total Score</th>
              <th id="body">{totalScore}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FinalTable;
