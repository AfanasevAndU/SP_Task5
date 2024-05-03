import { Container } from "../shared/ui/container";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Input } from "../shared/ui/input";
import { MovieCard } from "../shared/ui/movie-card";
import { useEffect, useState } from "react";
import { Movie } from "../store/movieSlice";
import { Button } from "../shared/ui/button";
import { Select } from "../shared/ui/select";
import { Option } from "../shared/ui/select";
import {
  addMovieToFavourites,
  removeMovieFromFavourites,
} from "../store/favouriteMovieSlice";
import {
  addMovieToWatchLater,
  removeMovieFromWatchLater,
} from "../store/watchLaterMovieSlice";

function MovieSearchPage() {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.movies);
  const { genre } = useAppSelector((state) => state.genres);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Состояние кнопок "Избранное"
  const [favouriteButtonStates, setFavouriteButtonStates] = useState<{
    [key: string]: string;
  }>({});
  // Состояние кнопок "Посмотреть позже"
  const [watchLaterButtonStates, setWatchLaterButtonStates] = useState<{
    [key: string]: string;
  }>({});

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(
    movies.results || []
  );

  const [selectedGenre, setSelectedGenre] = useState<Option | null>(null);

  useEffect(() => {
    setFilteredMovies(movies.results || []);
  }, [movies]);

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

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    const filtered =
      movies.results?.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) || [];
    setFilteredMovies(filtered);
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

  const handleGenresForMovie = (genreIds: string[]) => {
    return genreIds.map((genreId) => {
      const movieCategory = genre.genres?.find((genre) => genre.id === genreId);
      return movieCategory ? (
        <span key={movieCategory.id}>{movieCategory.name} | </span>
      ) : null;
    });
  };

  const handleGenreChange = (selectedGenre: Option | null) => {
    setSelectedGenre(selectedGenre);
    const filtered =
      movies.results?.filter((movie) =>
        selectedGenre ? movie.genre_ids.includes(selectedGenre.id) : true
      ) || [];
    setFilteredMovies(filtered);
  };

  return (
    <>
      <Container flexDirection="row">
        <div>Поиск по названию: </div>
        <Input placeholder="Название фильма" onChange={handleSearch}></Input>
        <Select
          options={genre.genres || []}
          onChange={handleGenreChange}
          title={selectedGenre?.name}
        />
      </Container>
      <div>
        {filteredMovies?.length === movies.results?.length &&
        !selectedGenre &&
        !searchTerm ? (
          <h2>Введите название фильма или выберите жанр</h2>
        ) : (
          filteredMovies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} id={index + 1}>
              <>
                <div>{handleGenresForMovie(movie.genre_ids)}</div>
                <Button
                  onClick={() => handleFavourites(movie)}
                  id={String(movie.id)}
                >
                  Избранное
                </Button>
                <Button
                  onClick={() => handleWatchLater(movie)}
                  id={String(movie.id)}
                >
                  Посмотреть позже
                </Button>
              </>
            </MovieCard>
          ))
        )}
      </div>
    </>
  );
}

export default MovieSearchPage;
