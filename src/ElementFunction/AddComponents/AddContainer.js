import React from 'react'



export const AddContainer =({showModel,setShowModel})=>{
    return (
        <>
        {showModel? <div>Model</div>:null}
        </>
    )
}