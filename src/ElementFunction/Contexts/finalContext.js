import React, { useContext, useState } from "react";

const FinalContext = React.createContext(
    {}
);


export const useFinalContext = () => {
    return useContext(FinalContext)
}



export const FinalGradeProvider = ({ children }) => {

    const [gradingComp, setGradingComp] = useState([{
        name: 'Assignment', percentage: '10', number: 2
    },
    {
        name: 'Midterm', percentage: '15', number: 2
    },
    {
        name: 'Final', percentage: '30', number: 1
    }]);

    

    

    return (<FinalContext.Provider value={{ gradingComp,setGradingComp }}>
        {children}</FinalContext.Provider>)
}