import React from 'react'
import { Children } from 'react'
import { useState } from 'react'

function PollDisplay(props) {

    const question = props.question
    const choices = props.choices
    
  return (
    <div >
        <h1>{question}</h1>
        {choices.map((obj)=>(
            <h3>{obj.label} {obj.votes}</h3>
        ))}
    </div>
  )
}

export default PollDisplay
