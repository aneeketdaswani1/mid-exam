import React from "react";
import './App.css'
import { useState } from "react";
function UserParticipation(props) {
    const [select,setSelect] = useState('')
    const choices = props.choices
    function handleSubmit(){
        props.set(select)
    }

    function handleChange(a,e){
        if(e.target.checked){
            setSelect(a)
        }
      
    }


  return (
    <div>
      {choices.map((obj)=>(
         <h3>
         <label htmlFor={obj.label}>{obj.label}</label>
         <input type="radio" name="label" id={obj.label} onChange={(e)=>handleChange(obj.label,e)} />
       </h3>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UserParticipation;
