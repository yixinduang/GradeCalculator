import Nav from './NavBar';
import { useFinalContext } from "./ElementFunction/Contexts/finalContext";

const FinalTable = () => {

    const { gradingComp, setGradingComp } = useFinalContext();
//https://codesandbox.io/s/10ec5?file=/src/App.js

    return (
        <>
            <Nav />
            <table>
                <tr id="header">
                    <th id="firstHeader">Assignment</th>
                    <th >total:30%</th>
                    <th>score  48/50</th>

                </tr>
                <tr id="body">
                    <th id="firstBody">A1</th>
                    <th >10%</th>
                    <th><input type="number" /> </th>

                </tr>
                <tr id="body">
                    <th id="firstBody">A2</th>
                    <th >10%</th>
                    <th><input type="number" /></th>


                </tr>
                <tr id="body">
                    <th id="firstBody">A3</th>
                    <th >10%</th>
                    <th><input type="number" /> </th>
                </tr>
                <tr id="header">
                    <th id="firstHeader">Midterm</th>
                    <th >total:30%</th>
                    <th>score</th>

                </tr>
                <tr id="body">
                    <th id="firstBody">M1</th>
                    <th >15%</th>
                    <th><input type="number" /> </th>
                </tr>
                <tr id="body">
                    <th id="firstBody">M1</th>
                    <th >15%</th>
                    <th><input type="number" /> </th>
                </tr>

                <tr id="header">
                    <th id="firstHeader">Final</th>
                    <th >total:30%</th>
                    <th>score</th>

                </tr>


                <tr id="body">
                    <th id="firstBody">F1</th>
                    <th >30%</th>
                    <th><input type="number" /> </th>
                </tr>
            </table>


            <table id="total">
                <tr>
                    <th id="firstBody">total</th>
                    <th id="body" >81</th>
                </tr>



            </table>

        </>
    )
}

export default FinalTable;