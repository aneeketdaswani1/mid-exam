import logo from './logo.svg';
import './App.css';
import PollDisplay from './PollDisplay';
import UserParticipation from './UserParticipation';
import { useState } from 'react';
function App() {
  const question = "What is your favorite programming language?"

  const choices = [
      
      { "id": 1, "label": "JavaScript", "votes": 0 },
  
      { "id": 2, "label": "Python", "votes": 0 },
  
      { "id": 3, "label": "Java", "votes": 0 },
  
      { "id": 4, "label": "C#", "votes": 0 } 
  ]

  function set(value){
    choices.map((obj)=>{
      if(obj.label == value){
        obj.votes = obj.votes+1
      }
    })
  }
  return (
    <>
      <PollDisplay  question={question} choices={choices}/>
      <UserParticipation set={set} choices={choices}/>  
      
    </>
    );
}

export default App;
