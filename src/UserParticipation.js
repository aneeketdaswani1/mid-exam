import React from "react";
import './App.css'
import { useState } from "react";
import ThankYouMessage from "./ThankYouMessage";
function UserParticipation(props) {
    const [select,setSelect] = useState('')
    const [submit,setSubmit] = useState(false)
    const choices = props.choices
    
    function handleSubmit(){
        props.set(select)
        setSubmit(true)
    }

    function handleChange(a,e){
        if(e.target.checked){
            setSelect(a)
        }
        console.log(a)
    }


  return (
    <div>
      <h1>{props.question}</h1>
      {choices.map((obj)=>(
         <h3>
         <label htmlFor={obj.label}>{obj.label}</label>
         <input type="radio" name="label" id={obj.label} onChange={(e)=>handleChange(obj.label,e)} />
       </h3>
      ))}

      {submit ? <ThankYouMessage/> : <>      <button onClick={handleSubmit}>Submit</button></>}
 
    </div>
  );
}

export default UserParticipation;
