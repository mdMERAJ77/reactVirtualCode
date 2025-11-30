import './MoviesList.css'
import MovieCard from './MovieCard'

function MoviesList({movies}) {
  if(movies.length===0){
    return <h1>NO movies found</h1>
  }
  return (
    <div className='movie-list'>
        {movies.map((currMovie,index)=>(
          <MovieCard key={currMovie.imdbID+"_"+index} currMovie={currMovie}/>
        ))}
    </div>
  )
}

export default MoviesList