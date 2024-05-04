import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Movie } from "../store/movieSlice";
import { Form } from "../shared/ui/form";
import { Input } from "../shared/ui/input";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Comment, addComment } from "../store/commentSlice";

interface MovieData extends Movie {
  overview: string;
  poster_path: string;
}

function MoviePage() {
  const { id } = useParams<{ id: string }>() || "";
  const [movie, setMovie] = useState<MovieData | null>(null);
  const dispatch = useAppDispatch();
  const { comments } = useAppSelector((state) => state.comments);
  const [comment, setComment] = useState<Comment | null>(null);

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

  const handleCommentChange = (value: string) => {
    if (id) {
      setComment({ id: id, title: value });
    }
  };

  const handleCommentAdd = (comment: Comment | null) => {
    if (comment) {
      dispatch(addComment(comment));
    }
  };
  return (
    <>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <p>Рейтинг фильма: {movie.vote_average}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <div style={{ width: "750px" }}>{movie.overview}</div>

          <h2>Комментарии к фильму</h2>
          <div>
            {comments
              .filter((comment) => comment.id === String(movie.id))
              .map((comment) => (
                <div key={comment.title}>
                  <p>Анонимный пользователь: {comment.title}</p>
                </div>
              ))}
          </div>
          <Form onSubmit={() => handleCommentAdd(comment)}>
            <Input
              onChange={handleCommentChange}
              placeholder="Введите комментарий"
            ></Input>
          </Form>
        </div>
      )}
    </>
  );
}

export default MoviePage;
