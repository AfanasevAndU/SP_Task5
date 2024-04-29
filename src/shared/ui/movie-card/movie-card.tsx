import { FC } from "react";
import { CardProps } from "./movie-card.types";
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
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDescription>
          Год выпуска: {movie.release_date} Рейтинг: {movie.vote_average}
          <div>Категории:{children}</div>
        </MovieDescription>
      </MovieInformation>
    </CardContainer>
  );
};
