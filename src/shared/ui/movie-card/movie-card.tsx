import { FC } from "react";
import { CardProps } from "./movie-card.types";
import { Link } from "react-router-dom";
import {
  CardContainer,
  MovieDescription,
  MovieInformation,
  MovieId,
  MovieTitle,
  MovieSeparator,
} from "./movie-card.styles";

export const MovieCard: FC<CardProps> = ({ movie, id, children }) => {
  return (
    <CardContainer>
      <MovieId>{id}</MovieId>
      <MovieSeparator></MovieSeparator>
      <MovieInformation>
        <Link to={`/movie/${movie.id}`}>
          <MovieTitle>{movie.title}</MovieTitle>
        </Link>
        <MovieDescription>
          Год выпуска: {movie.release_date} Рейтинг: {movie.vote_average}
          <div>Категории:{children}</div>
        </MovieDescription>
      </MovieInformation>
    </CardContainer>
  );
};
