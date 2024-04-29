import { FC } from "react";
import { CardProps } from "./movie-card.types";
import {
  CardContainer,
  MovieDescription,
  MovieInformation,
  MovieId,
  MovieImage,
  MovieTitle,
} from "./movie-card.styles";

export const MovieCard: FC<CardProps> = ({ movie, id, children }) => {
  return (
    <CardContainer id={id}>
      <MovieId>{movie.id}</MovieId>
      <MovieImage src={movie.poster_path}></MovieImage>
      <MovieInformation>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDescription>
          Год выпуска: {movie.release_date}
          <div>Категории:{children}</div>
        </MovieDescription>
      </MovieInformation>
    </CardContainer>
  );
};
