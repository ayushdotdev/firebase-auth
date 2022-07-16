
import './App.css';
import { useState } from 'react';
import { getAuth, TwitterAuthProvider,signInWithPopup } from "firebase/auth";

import {app} from './firebaseConfig'
function App() {
  let auth=getAuth();
  let googleProvider=new TwitterAuthProvider(); 
  const [data,setData]=useState({})
  const handleInput=(event)=>{
   
    let newInput={
      [event.target.name]:event.target.value
    };
    setData({...data,...newInput})
    
  }

   const handleSubmit=()=>{
    signInWithPopup(auth,googleProvider)
    .then(response=>{
     console.log(response.user);
    })
    .catch(err=>{
      console.log(err.message)
    })
   }
  
  return (
    <div className="App">
      <input type="text"
      name='email'
      placeholder='Email'
      onChange={event=>handleInput(event)}
      />
      <input type="text"
      name='password'
      placeholder='password'
      onChange={event=>handleInput(event)}
      /><br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
