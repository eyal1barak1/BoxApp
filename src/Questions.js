import React from 'react';
import { useState, useEffect } from 'react'

function Questions() {

    const [selectedOption1, setselectedOption1] = useState(false);
    const [selectedOption2, setselectedOption2] = useState(false);
    const [selectedOption3, setselectedOption3] = useState(false);

    function onValueChange(event) {
        const checked = event.target.value;
        if (checked === "No") {
            setselectedOption1(true);
            setselectedOption2(true);
            setselectedOption3(true);
        }
        else {
            setselectedOption1(false);
        }
    }

    function onValueChange2(event) {
        const checked = event.target.value;
        if (checked !== "No") {

            setselectedOption2(false);

        }
        else {
            setselectedOption2(true);
        }
    }
    function onValueChange3(event) {
        const checked = event.target.value;
        if (checked !== "No") {

            setselectedOption3(false);

        }
        else {
            setselectedOption2(true);
        }
    }


    return (
        <div>
            <form  >
                <fieldset id="group1" value="Yes" onChange={e => onValueChange(e)}>
                    <p>Have you Programmed before?</p>
                    <input type="radio" id="Yes" name="group1" value="Yes"></input>
                    <label for="Yes">Yes</label>
                    <input type="radio" id="No" name="group1" value="No" checked={selectedOption1}></input>
                    <label for="No">No</label>
                    <input type="radio" id="Partial" name="group1" value="Partial"></input>
                    <label for="Partial">Partial</label>
                </fieldset>

                <fieldset id="group2" onChange={e => onValueChange2(e)}>
                    <p>Have you Programmed in Java?</p>
                    <input type="radio" id="Yes" name="group2" value="Yes"></input>
                    <label for="Yes">Yes</label>
                    <input type="radio" id="No" name="group2" value="No" checked={selectedOption2}></input>
                    <label for="No">No</label>
                    <input type="radio" id="Partial" name="group2" value="Partial"></input>
                    <label for="Partial">Partial</label>
                </fieldset>

                <fieldset id="group3" onChange={e => onValueChange3(e)}>
                    <p>Have you Programmed in Python?</p>
                    <input type="radio" id="Yes" name="group3" value="Yes"></input>
                    <label for="Yes">Yes</label>
                    <input type="radio" id="No" name="group3" value="No" checked={selectedOption3}></input>
                    <label for="No">No</label>
                    <input type="radio" id="Partial" name="group3" value="Partial"></input>
                    <label for="Partial">Partial</label>
                </fieldset>
            </form>
        </div>
    )

}




export default Questions;