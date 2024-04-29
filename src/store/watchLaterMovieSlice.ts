import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "./movieSlice";

interface WatchLaterMovieState {
  movies: Movie[];
}

const initialState: WatchLaterMovieState = {
  movies: [],
};

const watchLaterMovieSlice = createSlice({
  name: "watchLaterMovie",
  initialState,
  reducers: {
    addMovieToWatchLater(state, action) {
      const newMovie = action.payload;
      state.movies.push(newMovie);
    },
    removeMovieFromWatchLater(state, action) {
      const movieIdToRemove = action.payload;
      state.movies = state.movies.filter(
        (movie) => movie.id !== movieIdToRemove
      );
    },
  },
});

export const { addMovieToWatchLater, removeMovieFromWatchLater } =
  watchLaterMovieSlice.actions;
export default watchLaterMovieSlice.reducer;
