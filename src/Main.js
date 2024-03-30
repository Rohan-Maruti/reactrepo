import React, { useState } from 'react'

const Main = () => {
   let [state,setState]= useState(0)
  
   function change(){
    setState(state+1)
   }
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={change}>inc</button>
    </div>
  )
}

export default Main