import { Route, Routes } from "react-router-dom";
import MoviePage from "../pages/movie";
import MoviesPage from "../pages/movies";
import MovieSearchPage from "../pages/movieSearch";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />}></Route>
      <Route path="/movie/:id" element={<MoviePage />}></Route>
      <Route path="/search" element={<MovieSearchPage />}></Route>
    </Routes>
  );
};

export default Router;
