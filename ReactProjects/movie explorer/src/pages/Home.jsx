import './Home.css'
import MoviesList from "../components/MoviesList";
import { useState,useEffect } from 'react';
import { useRef } from 'react';
function Home() {
  const [movies,setMovies] =useState([]);
  const inputRef=useRef();
  
  const fetchMovies=async(query)=>{
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=68f39566&s=${query}`)
      const data =await res.json();
      console.log(data);
      setMovies(data?.Search || [])
    } catch (error) {
      return console.log("server error",error);
    }
  }
  //handle form
  const handleForm=(e)=>{
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if(query){
      fetchMovies(query)
    }
    else{
      alert("input/search box is empty!")
    }
  }
  useEffect(() => {
    //If your fetchMovies() is doing asynchronous work, React Strict Mode will call it twice in development.
    //(Production build will NOT call it twice.)
    //To avoid the warning, wrap the effect like this:
    const isLoadDefault = () => {
      fetchMovies("war");
    };
    isLoadDefault();
  }, []);
  console.log("movies",movies);
  return (
    <div className="home">
      <form onSubmit={handleForm}>
        <input ref={inputRef} type="text" placeholder="enter movie name..." />
        <button>Search 🔎</button>
      </form>
      <MoviesList movies={movies}/>
    </div>
  );
}

export default Home;
