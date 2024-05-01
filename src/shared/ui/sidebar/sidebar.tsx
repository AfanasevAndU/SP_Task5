import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { Movie } from "../../../store/movieSlice";
import { SidebarProps } from "./sidebar.types";
import { SidebarContainer, SidebarItem } from "./sidebar.styles";

export const Sidebar: React.FC<SidebarProps> = () => {
  const favoriteMovies = useAppSelector(
    (state) => state.favouriteMovies.movies
  );
  const watchLaterMovies = useAppSelector(
    (state) => state.watchLaterMovies.movies
  );

  return (
    <SidebarContainer>
      <h2>Избранные фильмы: </h2>
      <SidebarItem>
        {favoriteMovies.map((movie: Movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </SidebarItem>
      <h2>Фильмы для просмотра позже: </h2>
      <SidebarItem>
        {watchLaterMovies.map((movie: Movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
