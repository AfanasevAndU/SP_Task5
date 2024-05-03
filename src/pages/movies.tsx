import { useEffect, useState } from "react";
import { Movie, fetchMovieData, updateMovies } from "../store/movieSlice";
import { fetchGenresData } from "../store/genre.Slice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { MovieCard } from "../shared/ui/movie-card/movie-card";
import { Container } from "../shared/ui/container";
import { Button } from "../shared/ui/button";

import {
  addMovieToFavourites,
  removeMovieFromFavourites,
} from "../store/favouriteMovieSlice";
import {
  addMovieToWatchLater,
  removeMovieFromWatchLater,
} from "../store/watchLaterMovieSlice";
import { Select } from "../shared/ui/select";
import { Option } from "../shared/ui/select/select.types";

const MoviesPage = () => {
  const dispatch = useAppDispatch();
  const {
    movies,
    loading: moviesLoading,
    error: moviesError,
  } = useAppSelector((state) => state.movies);
  const {
    genre,
    loading: genresLoading,
    error: genresError,
  } = useAppSelector((state) => state.genres);
  // Состояние кнопок "Избранное"
  const [favouriteButtonStates, setFavouriteButtonStates] = useState<{
    [key: string]: string;
  }>({});
  // Состояние кнопок "Посмотреть позже"
  const [watchLaterButtonStates, setWatchLaterButtonStates] = useState<{
    [key: string]: string;
  }>({});
  const [sortState, setSortState] = useState<
    "Высокому рейтингу" | "Низкому рейтингу"
  >("Высокому рейтингу");

  const [selectedGenre, setSelectedGenre] = useState<Option | null>(null);

  useEffect(() => {
    dispatch(fetchMovieData());
    dispatch(fetchGenresData());
  }, [dispatch]);

  useEffect(() => {
    // Установка начальных состояний кнопок "Избранное" и "Посмотреть позже"
    const defaultFavouriteButtonStates = movies?.results?.reduce(
      (button, movie) => {
        button[movie.id] = "Избранное";
        return button;
      },
      {} as { [key: string]: string }
    );
    if (defaultFavouriteButtonStates) {
      setFavouriteButtonStates(defaultFavouriteButtonStates);
    }
    const defaultWatchLaterButtonStates = movies?.results?.reduce(
      (button, movie) => {
        button[movie.id] = "Посмотреть позже";
        return button;
      },
      {} as { [key: string]: string }
    );
    if (defaultWatchLaterButtonStates) {
      setWatchLaterButtonStates(defaultWatchLaterButtonStates);
    }
  }, [movies]);

  if (moviesError || genresError) {
    return <h2>Ошибка, попробуйте позже</h2>;
  }

  if (moviesLoading || genresLoading) {
    return <h2>Загрузка....</h2>;
  }

  const handleGenresForMovie = (genreIds: string[]) => {
    return genreIds.map((genreId) => {
      const movieCategory = genre.genres?.find((genre) => genre.id === genreId);
      return movieCategory ? (
        <span key={movieCategory.id}>{movieCategory.name} | </span>
      ) : null;
    });
  };

  const handleFavourites = (movie: Movie) => {
    const movieId = String(movie.id);
    const newState = { ...favouriteButtonStates };
    if (newState[movieId] === "Избранное") {
      dispatch(addMovieToFavourites(movie));
      newState[movieId] = "Удалить из избранного";
    } else {
      dispatch(removeMovieFromFavourites(movie));
      newState[movieId] = "Избранное";
    }
    setFavouriteButtonStates(newState);
  };

  const handleWatchLater = (movie: Movie) => {
    const movieId = String(movie.id);
    const newState = { ...watchLaterButtonStates };
    if (newState[movieId] === "Посмотреть позже") {
      dispatch(addMovieToWatchLater(movie));
      newState[movieId] = "Удалить из посмотреть позже";
    } else {
      dispatch(removeMovieFromWatchLater(movie));
      newState[movieId] = "Посмотреть позже";
    }
    setWatchLaterButtonStates(newState);
  };

  const handleGenreChange = (selectedGenre: Option | null) => {
    setSelectedGenre(selectedGenre);
    console.log(selectedGenre);
  };

  const HandleGenreReset = () => {
    setSelectedGenre(null);
    console.log(selectedGenre);
  };

  const handleSortByRating = () => {
    if (!movies.results) {
      console.error("Список фильмов пустой или неопределенный");
      return;
    }

    const sortedMovies = [...movies.results];
    sortedMovies.sort((a, b) => {
      if (sortState === "Высокому рейтингу") {
        return b.vote_average - a.vote_average;
      } else {
        return a.vote_average - b.vote_average;
      }
    });

    dispatch(updateMovies({ results: sortedMovies }));

    setSortState(
      sortState === "Высокому рейтингу"
        ? "Низкому рейтингу"
        : "Высокому рейтингу"
    );
  };

  const filteredMovies = movies?.results?.filter((movie) => {
    return selectedGenre ? movie.genre_ids.includes(selectedGenre.id) : true;
  });

  return (
    <>
      <Container flexDirection="row">
        <div>Сортировать по: </div>
        <Button onClick={handleSortByRating}>{sortState}</Button>
        <Select
          options={genre.genres || []}
          onChange={handleGenreChange}
          title={selectedGenre?.name}
        />
        <Button onClick={HandleGenreReset}>Сбросить фильтры</Button>
      </Container>
      <div>
        {filteredMovies?.length === 0 ? (
          <h2>Фильмов с такой категорией нет.</h2>
        ) : (
          filteredMovies?.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} id={index + 1}>
              <>
                <div>{handleGenresForMovie(movie.genre_ids)}</div>
                <Button
                  onClick={() => handleFavourites(movie)}
                  id={String(movie.id)}
                >
                  {favouriteButtonStates[String(movie.id)]}
                </Button>
                <Button
                  onClick={() => handleWatchLater(movie)}
                  id={String(movie.id)}
                >
                  {watchLaterButtonStates[String(movie.id)]}
                </Button>
              </>
            </MovieCard>
          ))
        )}
      </div>
    </>
  );
};

export default MoviesPage;
