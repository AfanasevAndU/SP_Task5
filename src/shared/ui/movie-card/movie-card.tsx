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

export const Card: FC<CardProps> = ({ film, id }) => {
  return (
    <CardContainer id={id}>
      <MovieId>{film.id}</MovieId>
      <MovieImage src={film.image}></MovieImage>
      <MovieInformation>
        <MovieTitle>{film.title}</MovieTitle>
        <MovieDescription>
          Год выпуска: {film.year} Категории: {film.category}
        </MovieDescription>
      </MovieInformation>
    </CardContainer>
  );
};
