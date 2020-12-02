import React from 'react'

import animalsImage from "../../../static/assets/spirit-animal.jpg"

export default function home(props) {
    function handleClick() {
        props.history.push("/quiz")
    }

    return (
       <div className='home-wrapper'>
          <h2>Spirit Animal Quiz</h2>
          <button onClick={handleClick}>Take Quiz</button>
          <img src={animalsImage} alt=""/>
       </div>
    )
}

