import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <div >
      <img src={movie.medium_cover_image}></img>
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </div>);
}

export default Movie;