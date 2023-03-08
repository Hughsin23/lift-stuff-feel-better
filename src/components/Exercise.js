import React from "react";
import { useState, useEffect } from "react";

export default function Exercise ({}) {


    const [exercises, setExercises] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const exerciseData = await fetch('http://omdbapi.com/?t=jaws&apikey=c4c2784c')
            const exerciseJson = await exerciseData.json()

            setExercises(exercises => [...exercises, exerciseJson])
        }

        
        // const fetchData = async () => {
        //     const data = await fetch('http://omdbapi.com/?t=jaws&apikey=c4c2784c').then((response) => response.json())

        //     setExercises(exercises => [...exercises, data])
        // }

    
        fetchData()
            .catch(console.error)
    }, [])

    return (
        <div>
            { exercises[0] && <h1>{exercises[0].Title}</h1> }

        </div>
        
    )
}