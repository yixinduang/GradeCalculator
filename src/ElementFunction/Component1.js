import React from 'react';
import "./Component.css"
import ItemList from './itemList';
import {useFinalContext,FinalGradeProvider} from "./Contexts/finalContext";


    

const SetComponent =(props)=>{

    console.log("here is setcomp")

    console.log(props)

    const { gradingComp,setGradingComp }=useFinalContext();

    
    console.log(gradingComp);



    function HandleClick(item){

        console.log(item);


        let found=gradingComp.find(obj=>{return obj.name===item});

        found.number++;
        console.log(found);
        setGradingComp(gradingComp);
        console.log(gradingComp);

        
    }
    
   

    

    return (
        <div class="component" key={props.name}>


            <span class="close">x</span>
            <div >
                <h1 class="component-title">{props.name}</h1>
                <div class="component-subtitle">
                    <span class="component-percentage">
                        {props.percentage}
                    </span>
                    <span>% Each</span>
                </div>
            </div>
            <hr id='line' />
            <div >

               <ItemList number={props} />

               
            </div>
            <div class="add-item-button-container">
                <button class="add-item-button" onClick={HandleClick(props.name)}>+ add item </button>
            </div>
        </div>
    )

}




export default function Component(props) {
 

    return (
        props.c.map((c)=>SetComponent(c))
    )
}

