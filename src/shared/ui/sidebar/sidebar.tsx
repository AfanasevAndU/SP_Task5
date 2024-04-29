import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { Movie } from "../../../store/movieSlice";
import { SidebarProps } from "./sidebar.types";

export const Sidebar: React.FC<SidebarProps> = () => {
  const favoriteMovies = useAppSelector(
    (state) => state.favouriteMovies.movies
  );
  const watchLaterMovies = useAppSelector(
    (state) => state.watchLaterMovies.movies
  );

  return (
    <div>
      <h2>Избранные фильмы: </h2>
      <ul>
        {favoriteMovies.map((movie: Movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <h2>Фильмы для просмотра позже: </h2>
      <ul>
        {watchLaterMovies.map((movie: Movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
