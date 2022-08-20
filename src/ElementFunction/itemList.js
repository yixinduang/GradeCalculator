import React from "react";

export default function ItemList(props){
   


let content=[];
for(let i=1;i<=props.number.number;i++){
    let name=props.number.name;
    content.push(
        <div  class="item-container">
            <span class="item-name">{name.charAt(0)+i}</span>
            <span class="item-percentage">{props.number.percentage}</span>
            <span>%</span>
        </div>
        )

}
return(<div class="item-list">{content}</div>)

}
