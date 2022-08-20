import React from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "./ElementFunction/AddButton";
import Component from "./ElementFunction/Component";
import Nav from './NavBar';
import './page2.css'

import {useFinalContext} from "./ElementFunction/Contexts/finalContext";
const Page2 = (props) => {

    console.log(useFinalContext().gradingComp)

    
   const Context1=useFinalContext().gradingComp;
   
    console.log("hi");
    console.log(Context1);
    
    console.log(Context1[0].name);

    return (
        <div>
            <Nav />
            <section class="section">
                <div class="section-one-container">


                    <Component c={Context1}/>

                    <AddButton />
                </div>

            </section>

        </div>);

}

export default Page2;