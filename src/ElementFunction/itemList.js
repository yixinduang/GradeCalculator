import React from "react";
import {useFinalContext,FinalGradeProvider} from "./Contexts/finalContext";


export default function ItemList(props){


    const { gradingComp,setGradingComp }=useFinalContext();
   
    const DelteClick=(item)=>{

        setGradingComp(prevComps=>prevComps.map(comp=>{
            if (comp.name !== item) return comp;
            return{...comp,number: comp.number-1}
        }));
        console.log(gradingComp);

        
    }

let content=[];
for(let i=1;i<=props.number.number;i++){
    let name=props.number.name;
    content.push(
        <div  class="item-container" onClick={()=>DelteClick(name)}>
            <span class="item-name">{name.charAt(0)+i}</span>
            <span class="item-percentage">{props.number.percentage}</span>
            <span>%</span>
        </div>
        )

}
return(<div class="item-list">{content}</div>)

}
