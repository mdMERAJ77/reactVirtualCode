import { useState } from "react"

const App = () => {
  const[count,setCount]=useState(0)
  return (
    <div className='min-h-screen min-w-screen bg-amber-100'>
      <div className='flex flex-col h-screen items-center justify-center font-semibold text-4xl'>
        <h2 className='bg-amber-400 px-6 py-3 rounded-2xl'>COUNTER</h2>
        <h1 className="mt-10 text-6xl">{count}</h1>
        <div className='mt-5'>
          <button className='m-3 bg-amber-700 rounded-full w-17 h-17 text-4xl' onClick={()=>setCount(count+1)}>+</button>
          <button className='m-3 bg-amber-700 rounded-full w-17 h-17 text-4xl' onClick={()=>setCount(0)}>0</button>
          <button className='m-3 bg-amber-700 rounded-full w-17 h-17 text-4xl' onClick={()=>setCount(count-1)}>-</button>
        </div>
      </div>
    </div>
  )
}

export default App