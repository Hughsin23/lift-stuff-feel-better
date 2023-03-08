import React from "react";
import { useState, useEffect } from "react";

export default function Excersize ({}) {


    const [exersizes, setExersizes] = useState([])

    useEffect(() => {

        // can't get this to work, ask bastien
        const fetchData = async () => {
            const data = await fetch('http://omdbapi.com/?t=jaws&apikey=c4c2784c')
            const json = await data.json()

            setExersizes(exersizes => [...exersizes, json])
        }


        // const fetchData = async () => {
        //     const data = await fetch('http://omdbapi.com/?t=jaws&apikey=c4c2784c').then((response) => response.json())

        //     setExersizes(exersizes => [...exersizes, data])
        // }

    
        fetchData()
            .catch(console.error)

        return () => {

        }
    }, [])

    return (
        <div>
            { exersizes[0] && <h1>{exersizes[0].Title}</h1> }
            <h2>hello</h2>

        </div>
        
    )
}