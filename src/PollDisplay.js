import React from 'react'
import { useState } from 'react'

function PollDisplay() {

    const [javaScriptvotes,javaScriptsetVotes] = useState(0)
    const [javavotes,javasetVotes] = useState(0)
    const [pythonvotes,pythonsetVotes] = useState(0)
    const [csharpvotes,csharpsetVotes] = useState(0)

    const questions = {

        "question": "What is your favorite programming language?",
      
        "choices": [
      
          { "id": 1, "label": "JavaScript", "votes": 0 },
      
          { "id": 2, "label": "Python", "votes": 0 },
      
          { "id": 3, "label": "Java", "votes": 0 },
      
          { "id": 4, "label": "C#", "votes": 0 }
    
        ] 
    }
      
  return (
    <div >
        <h1>{questions.question}</h1>

        <h3>JavaScript:{javaScriptvotes} Votes</h3>
        <h3>Python:{pythonvotes} Votes</h3>
        <h3>Java:{javavotes} Votes</h3>
        <h3>C-Sharp:{csharpvotes} Votes</h3>




    


        {/* <h3><label htmlFor='javaScript'>JavaScript</label>
        <input type='radio' name='label' id='javaScript'/>
        </h3>
        
        <h3><label htmlFor='python'>Python</label>
        <input type='radio' name='label' id='python'/>
        </h3>

        <h3><label htmlFor='java'>Java</label>
        <input type='radio' name='label' id='java'/>
        </h3>

        <h3><label htmlFor='C#'>C#</label>
        <input type='radio' name='label' id='C#'/>
        </h3> */}

      
    </div>
  )
}

export default PollDisplay
