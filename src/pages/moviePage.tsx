import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Movie } from "../store/movieSlice";

interface MovieData extends Movie {
  overview: string;
  poster_path: string;
}

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieData | null>(null);

  const fetchMovieData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=70c2db40c936ec13adfbb528363439b7`
    );
    const movieData: MovieData = await response.data;
    setMovie(movieData);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <p>Рейтинг фильма: {movie.vote_average}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <p>{movie.overview}</p>
        </div>
      )}
    </>
  );
}

export default MoviePage;
