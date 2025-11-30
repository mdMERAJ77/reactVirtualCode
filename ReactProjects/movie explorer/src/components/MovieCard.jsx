// import image from "../../public/download.jpeg";
import { Link } from 'react-router-dom';
import './MovieCard.css'
function MovieCard({currMovie}) {
  return (
    <>
      <div className="movie-card">
        <img src={currMovie.Poster} alt={currMovie.Title} />
        <h3>Name: {currMovie.Title}</h3>
        <p>Year: {currMovie.Year}</p>
        <Link to={`/movie/${currMovie.imdbID}`}>Details</Link>
      </div>
    </>
  );
}

export default MovieCard;
