import React from 'react'

import animalsImage from "../../../static/assets/spirit-animal.jpg"

export default function home(props) {
    return (
       <div className='home-wrapper'>
          <h2>Spirit Animal Quiz</h2>
          <button>Take Quiz</button>
          <img src={animalsImage} alt=""/>
       </div>
    )
}

