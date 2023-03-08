import { useState, useEffect } from "react";
import React from "react";
import { Routes, Route, Link } from "react-router-dom"


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '03adb208c6msh71e19f305dcd0bfp1e1eafjsndabda28f1484',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
};

// fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));




export default function Exercise({ }) {


    const [exercises, setExercises] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            let exerciseJson

            try {
                const exerciseData = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', options)

                exerciseJson = await exerciseData.json()
                console.log(exerciseJson)


            } catch (e) {
                console.log(e)
            }

            setExercises(exerciseJson)
            console.log(exercises)
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
            {exercises[0] && <h1>{exercises.map((exercise) => {
                return (
                    <>
                        {/* TODO create the exercise component, put it here in a link with the prop of the entire exercise object */}
                        <h3>{exercise.name}</h3>
                        <li>{exercise.difficulty}</li>
                        <li>{exercise.equipment}</li>
                    </>

                )

            })}</h1>}


        </div>

    )
}