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
      const comp = gradingComp[j];

      for (let i = 1; i <= comp.number; i++) {
        const component = {
          name: comp.name + i,
          percentage: Number(comp.percentage),
          score: 0,
        };
        componentList.push(component);
      }
    }
  }, []);

  React.useEffect(() => {
    for (let i = 0; i < componentList.length; i++) {
      if (componentList[i].name === selected) {
        setPercentage(componentList[i].percentage);
      }
    }
  }, [selectedPercentage]);

  /////////////////////////////

  React.useEffect(() => {
    (async () => {
      setList((componentList) =>
        componentList.filter((component) => {
          return component.name !== selected;
        })
      );
    })();
  }, []);

  /////////////////

  function HandleChange(event) {
    componentList.map((comp) => {
      if (comp.name === event.target.name) {
        comp.score = Number(event.target.value);
      }
    });

    //get the sum

    getTotal();
  }

  function HandleChangeTotal(event) {
    if (event.target.name === "total") {
      setTotalScore(Number(event.target.value));
    }
  }

  React.useEffect(() => {
    getTotal();
  }, [total]);

  function getTotal() {
    const gradelist = componentList.map(
      (comp) => (comp.score * comp.percentage) / 100
    );

    let sum = gradelist.reduce((acc, comp) => {
      return acc + comp;
    }, 0);

    setPartialScore(
      (((total - sum) * 100) / Number(selectedPercentage)).toFixed(2)
    );
  }

  //////////////////////////////////////////

  const getSelection = (item) => {
    return (
      <>
        <tr id="body">
          <th id="firstBody">{item.name}</th>
          <th>{item.percentage + "%"}</th>
          <th>
            <input type="number" name={item.name} onChange={HandleChange} />%{" "}
          </th>
        </tr>
      </>
    );
  };

  const sectionContent = componentList.map((comp) => getSelection(comp));

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
                <input
                  type="number"
                  name="total"
                  onChange={HandleChangeTotal}
                />
                %{" "}
              </th>
            </tr>
          </tbody>
        </table>

        <table id="total">
          <tbody>
            <tr>
              <th id="firstBody">{selected}</th>
              <th id="body">{partialScore}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PartialGradeFinalTable;
