import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "../pages/moviePage";
import MoviesPage from "../pages/movies";
import MovieSearchPage from "../pages/movieSearch";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />}></Route>
        <Route path="/movie" element={<MoviePage />}></Route>
        <Route path="/search" element={<MovieSearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
