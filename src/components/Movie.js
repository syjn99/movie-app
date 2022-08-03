import { Link } from "react-router-dom";
import style from "./Movie.module.css";

function Movie({ movie }) {
  if (movie.summary.length === 0) {
    movie.summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus quam aliquet commodo maximus. Etiam rutrum placerat risus a molestie. Quisque non sollicitudin tortor, ac vulputate dolor. Pellentesque cursus ac dolor in mattis. Mauris viverra erat quis venenatis ullamcorper. Nullam a porttitor mauris, eu pellentesque nisi. Aliquam porttitor felis vitae velit facilisis cursus. Ut eget risus semper tortor rhoncus egestas. Integer convallis, ante id imperdiet fringilla, orci felis molestie eros, id gravida elit odio vitae velit. Vivamus cursus tempus elit, sit amet porttitor justo pretium vel. Etiam quis condimentum tortor, in interdum est."
  }
  if (movie.genres.length > 4) {
    movie.genres = movie.genres.slice(0, 4);
  }
  return (
    <span className={style.card}>
      <img src={movie.medium_cover_image}></img>
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
      <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
      <p>{movie.summary.length > 200 ? movie.summary.slice(0, 200) + "..." : movie.summary}</p>
    </span>);
}

export default Movie;