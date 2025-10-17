import React, { useEffect, useState } from 'react'
import './App.css'
function App() {
  const[count,setCount]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{setCount(count+1)},1000)
  },[])
  return (
    <div>
      <button style={{fontSize:"40px"}}>{count}</button>
      
    </div>
  )
}

export default App