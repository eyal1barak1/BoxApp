import React from 'react';
import { useState, useEffect } from 'react'

function Questions() {

    const [selectedOption1, setselectedOption1] = useState("Yes");
    const [selectedOption2, setselectedOption2] = useState("Yes");
    const [selectedOption3, setselectedOption3] = useState("Yes");


    function RadioChangeOption1(e) {
        setselectedOption1(e.target.value)
    }
    function RadioChangeOption2(e) {
        setselectedOption2(e.target.value)
    }
    function RadioChangeOption3(e) {
        setselectedOption3(e.target.value)
    }

    useEffect(() => {
        if (selectedOption1 == "No") {
            setselectedOption2("No");
            setselectedOption3("No");
        }


    }, [selectedOption1])


    return (
        <div>
            <p>Have you Programmed before?</p>
            <input type="radio" checked={selectedOption1 === "Yes"} name="group1" value="Yes" onChange={RadioChangeOption1} />Yes
            <input type="radio" checked={selectedOption1 === "No"}name="group1" value="No" onChange={RadioChangeOption1} />No
            <input type="radio" checked={selectedOption1 === "Partial"}name="group1" value="Partial" onChange={RadioChangeOption1} />Partial

            <p>Have you Programmed in Java?</p>
            <input type="radio" checked={selectedOption2 === "Yes"} name="group2" value="Yes" onChange={RadioChangeOption2} />Yes
            <input type="radio" checked={selectedOption2 === "No"} name="group2" value="No" onChange={RadioChangeOption2} />No
            <input type="radio" checked={selectedOption2 === "Partial"} name="group2" value="Partial" onChange={RadioChangeOption2} />Partial

            <p>Have you Programmed in Python?</p>
            <input type="radio" checked={selectedOption3 === "Yes"} name="group3" value="Yes" onChange={RadioChangeOption3} />Yes
            <input type="radio" checked={selectedOption3 === "No"} name="group3" value="No" onChange={RadioChangeOption3} />No
            <input type="radio" checked={selectedOption3 === "Partial"} name="group3" value="Partial" onChange={RadioChangeOption3} />Partial
        </div>
    )

}




export default Questions;