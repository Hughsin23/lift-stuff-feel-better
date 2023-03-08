import React from "react";
import { useState, useEffect } from "react";

export default function Exercise({ }) {


    const [exercises, setExercises] = useState([])



    return (
        <div>
            {exercises[0] && <h1>{exercises[0].Title}</h1>}


        </div>

    )
}