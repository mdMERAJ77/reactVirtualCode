import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movie,setMovie] =useState(null);
  const {id} = useParams();
  useEffect(()=>{
    async function getMovie() {
      const res=await fetch(`https://www.omdbapi.com/?apikey=68f39566&i=${id}`);
      const data =await res.json();
      setMovie(data)
      console.log(data);
    }
    getMovie()
  },[id])
   //Prevent crash before data loads
  if (!movie) return <h2>Loading...</h2>;
  return (
    <div>
      <div className="movie-card">
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <p>
        <strong>Genre: </strong>
        {movie.Genre}
      </p>
      <p>
        <strong>Released: </strong> {movie.Released}
      </p>
      <p>
        <strong>Actors: </strong>{movie.Actors}
      </p>
        <p>
        <strong>imdb Rating: </strong>
        {movie.imdbRating}
      </p>
      <p>
        <strong>Plot: </strong>
        {movie.Plot}
      </p>
      </div>
    </div>
  )
}

export default MovieDetails