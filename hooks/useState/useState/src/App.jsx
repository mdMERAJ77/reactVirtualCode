import React, { useState } from 'react'
import './App.css'
function App() {
  let variable=0;
  let [count,setCount]=useState(0);

  const handleClick=()=>{
    variable=variable+1; //UI WON'T UPDATE
    setCount(count+1); //UI WILL UPDATE
    console.log(variable);
    console.log(count);
  }
  return (
    <div>
      <p>Regular Variable: {variable}</p>
      <br />
      <p>React State: {count}</p>
      <br />
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App