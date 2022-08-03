import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState({});
  const getMovieInfo = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovieInfo();
  }, []);
  console.log("hi");
  return (
    <div>
      {loading ? <strong>Loading...</strong> : <div>
        <img src={movie.medium_cover_image} />
        <h1>{movie.title}</h1>
        <h2>Rating : ⭐️{movie.rating}</h2>
        <p>{movie.description_full}</p>
      </div>
      }
    </div>

  );
}

export default Detail;