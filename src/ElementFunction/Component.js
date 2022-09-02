import React from 'react';
import "./Component.css"
import ItemList from './itemList';
import {useFinalContext,FinalGradeProvider} from "./Contexts/finalContext";


    


const SetComponent =(props)=>{

    

    console.log(props)

    const { gradingComp,setGradingComp }=useFinalContext();

    
    console.log(gradingComp);



    const HandleClick=(item)=>{

        setGradingComp(prevComps=>prevComps.map(comp=>{
            if (comp.name !== item) return comp;
            return{...comp,number: Number(comp.number)+1}
        }));
        console.log(gradingComp);

        
    }
    
    const ColseContainer=(item)=>{

        setGradingComp(prevComps=>prevComps.filter(comp=>{
            return comp.name!==item ;
            
        }))
        console.log("closed")
    }
   

    console.log("here is setcomp")

    return (
        <div class="component" key={props.name}>


            <span class="close" onClick={()=>ColseContainer(props.name)}>&times;</span>
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
                <button class="add-item-button" onClick={()=>HandleClick(props.name)}>+ add item </button>
            </div>
        </div>
    )

}




export default function Component(props) {
 

    return (
        
        props.c.map((c)=>SetComponent(c))
    )
}

