import React from 'react'
import { Children } from 'react'
import { useState } from 'react'
import UserParticipation from './UserParticipation'
function PollDisplay(props) {
    const [submit,setSubmit] = useState(false)
    const question = props.question
    const choices = props.choices

    function handleChange(){
      setSubmit(true)
    }

  return (
    <div >
      { submit ? <UserParticipation {...props}/>: <>
        <h1>{question}</h1>
        {choices.map((obj)=>(
            <h3>{obj.label} {obj.votes}</h3>
        ))}
        <button onClick={handleChange}>Start</button>
        </>
      } 
    </div>
  )
}

export default PollDisplay
