import React from 'react'
import './Modal.css'
import { useFinalContext, FinalGradeProvider } from "../Contexts/finalContext";



export const Modal = ({ showModel, setShowModel }) => {

    const { gradingComp, setGradingComp } = useFinalContext();

    const [formData, setFormData] = React.useState({
        name: "",
        percentage: "",
        number: 0
    })


    function handleChange(event) {


        setFormData(prev => { return { ...prev, [event.target.name]: event.target.value } })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        const updated = [...gradingComp, formData]
        setGradingComp(updated);
        setShowModel(prev => !prev);
        setFormData({
            name: "",
            percentage: "",
            number: 0
        });
    }
    return (
        <>
            {showModel ? (
                <div id="background">
                    <div id="modalwrapper">

                        <img id="section1" src="./acc3.PNG" />


                        <div >
                            <div id="section2">
                                <h4>Please enterning the following section:</h4>
                                <form onSubmit={handleSubmit}>

                                    <label for="name">Name:</label><br />
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        name="name"
                                        value={formData.name}
                                        id="name" /><br />

                                    <label for="number">Number:</label><br />
                                    <input
                                        type="number"
                                        onChange={handleChange}
                                        name="number"
                                        value={formData.number}
                                        id="number" /><br />

                                    <label for="percentage">Percentage per component:</label><br />
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        name="percentage"
                                        value={formData.percentage}
                                        id="percenatge" /><br />
                                    <button type="submit" id="submit">Submit</button>
                                </form>
                            </div>

                        </div>
                        <div id="closeModel" onClick={() => setShowModel(prev => !prev)}>&times;</div>
                    </div>
                </div>

            ) : null}
        </>
    )
}