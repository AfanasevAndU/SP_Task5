import { useEffect } from "react";
import { fetchMovieData } from "../store/movieSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieData());
  }, []);
  console.log(error);

  if (error) {
    return <h2>Ошибка, попробуйте позже</h2>;
  }

  if (loading) {
    return <h2>Загрузка....</h2>;
  }

  return (
    <>
      <div>dadad</div>
      <div>
        <ul>{movies?.title}</ul>
      </div>
      <Link to={"search"}>111</Link>
    </>
  );
};

export default MoviesPage;
