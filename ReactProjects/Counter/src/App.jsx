import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [time,setTime] = useState(0);
  const[isRunning, setIsRunning]= useState(false);
  useEffect(()=>{
    let timer;
    if(isRunning){
      timer=setInterval(()=>{setTime((prev)=>prev+10)},10)
    }
    else{
      clearInterval(timer);
    }
    return ()=>{
      clearInterval(timer)
    }
  },[isRunning])

  const formatTime=(time)=>{
    const minutes=String(Math.floor(time/60000)).padStart(2,'0');
    const seconds=String(Math.floor(time%60000/1000)).padStart(2,'0');
    const centiSeconds=String(Math.floor(time%1000/10)).padStart(2,'0');
    return `${minutes}:${seconds}:${centiSeconds}`
  }
  return (
    <div className="min-h-screen min-w-screen bg-amber-100">
      <div className="flex flex-col h-screen items-center  font-semibold text-4xl">
        <h2 className="bg-amber-400 px-6 py-3 rounded-2xl mt-7">COUNTER</h2>
        <h1 className="mt-5 text-6xl">{count}</h1>
        <div className="mt-3">
          <button
            className="m-3 bg-amber-700 rounded-full w-17 h-17 text-4xl"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button
            className="m-3 bg-amber-700 rounded-full w-17 h-17 text-4xl"
            onClick={() => setCount(0)}
          >
            0
          </button>
          <button
            className="m-3 bg-amber-700 rounded-full w-17 h-17 text-4xl"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
        <div className="w-100 border"></div>
        <div>
          <h1 className="mt-7 bg-amber-400 px-6 py-3 rounded-2xl text-center">
            Stopwatch
          </h1>
          <div className="text-center my-5 font-mono ">
            {formatTime(time)}
          </div>
          <div>
            <button className="m-3 px-3 py-3 bg-amber-700 rounded-full md:w-28 md:h-17 md:text-4xl text-2xl" onClick={()=>setIsRunning(true)}>Start</button>
            <button className="m-3 px-3 py-3 bg-amber-700 rounded-full md:w-28 md:h-17 md:text-4xl text-2xl" onClick={()=>setIsRunning(false)}>Stop</button>
            <button className="m-3 px-3 py-3 bg-amber-700 rounded-full md:w-28 md:h-17 md:text-4xl text-2xl" onClick={()=>{setIsRunning(false);setTime(0)}}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
