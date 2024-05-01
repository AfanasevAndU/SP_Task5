import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "./movieSlice";

interface FavouriteMovieState {
  movies: Movie[];
}

const initialState: FavouriteMovieState = {
  movies: [],
};

const favouriteMovieSlice = createSlice({
  name: "favouriteMovie",
  initialState,
  reducers: {
    addMovieToFavourites(state, action) {
      const newMovie = action.payload;
      state.movies.push(newMovie);
    },
    removeMovieFromFavourites(state, action) {
      const movieToRemove = action.payload;
      state.movies = state.movies.filter(
        (movie) => movie.id !== movieToRemove.id
      );
    },
  },
});

export const { addMovieToFavourites, removeMovieFromFavourites } =
  favouriteMovieSlice.actions;
export default favouriteMovieSlice.reducer;
