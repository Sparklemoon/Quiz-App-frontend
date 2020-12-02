import React from 'react'
import { Link } from 'react-router-dom'

export default function results(props) {
    const listOfAnimals = [
        "Lion",
        "Tiger",
        "Bear",
        "Eagle",
        "Owl",
        "Seal",
        "Shark",
        "Chicken",
        "Cow",
        "Pig",
        "Horse",
        "Kangaroo",
        "Dolphin",
        "Penguin",
        "Squirrel",
        "Octopus"
    ]

    function calculateAnimal() {
        const animalIndex = props.score % 16
        return listOfAnimals[animalIndex]
    }

    return (
       <div className='results-wrapper'>
          <h3>Your score is</h3>
          <h2>{calculateAnimal()}</h2>
          <Link to="/"><button>Back Home</button></Link>
          
       </div>
    )
}