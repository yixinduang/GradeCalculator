import Nav from "../NavBar";
import { useFinalContext } from "../ElementFunction/Contexts/finalContext";
import "../pages/table.css";
import React, { useEffect } from "react";
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
          cpercentage: Number(g.percentage),
          score: 0,
        };
        componentList.push(component);
      }
    }
  }, []);

  React.useEffect(() => {
    for (let i = 0; i < componentList.length; i++) {
      if (componentList[i].cname === selected) {
        setPercentage(componentList[i].cpercentage);
      }
    }
    console.log("percentage:" + selectedPercentage);
  }, [selectedPercentage]);

  /////////////////////////////

  React.useEffect(() => {
    (async () => {
      setList((componentList) =>
        componentList.filter((component) => {
          return component.cname !== selected;
        })
      );
    })();
  }, []);

  console.log("below is componentList:");
  console.log(componentList);

  /////////////////

  function HandleChange(event) {
    componentList.map((c) => {
      if (c.cname === event.target.name) {
        c.score = Number(event.target.value);
      }
    });

    //get the sum

    sumUP();
  }

  function HandleChangeTotal(event) {
    console.log("event value" + event.target.value);

    if (event.target.name === "total") {
      setTotalScore(Number(event.target.value));
    }
  }

  React.useEffect(() => {
    sumUP();
  }, [total]);

  /////////////////////////////////////////////

  function sumUP() {
    const gradelist = componentList.map((c) => (c.score * c.cpercentage) / 100);

    let sum = gradelist.reduce((acc, comp) => {
      console.log(comp);

      return acc + comp;
    }, 0);

    console.log("sum" + sum);
    console.log(selectedPercentage);
    console.log(total);

    setPartialScore(
      (((total - sum) * 100) / Number(selectedPercentage)).toFixed(2)
    );
  }

  //////////////////////////////////////////

  const getSelection = (item) => {
    console.log(item.cname);
    return (
      <>
        <tr id="body">
          <th id="firstBody">{item.cname}</th>
          <th>{item.cpercentage + "%"}</th>
          <th>
            <input type="number" name={item.cname} onChange={HandleChange} />%{" "}
          </th>
        </tr>
      </>
    );
  };

  const sectionContent = componentList.map((comp) => getSelection(comp));

  return (
    <>
      <Nav
        np={
          "Now its time to calucate your grade! enter how much you have earned out of the total below."
        }
      />

      <div id="paper">
        <table>
          <tr id="header">
            <th id="firstHeader">Name</th>
            <th>percentage</th>
            <th>score </th>
          </tr>

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
              <input type="number" name="total" onChange={HandleChangeTotal} />%{" "}
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
