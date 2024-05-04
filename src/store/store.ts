import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice.ts";
import genreSlice from "./genre.Slice.ts";
import favouriteMovieSlice from "./favouriteMovieSlice.ts";
import watchLaterMovieSlice from "./watchLaterMovieSlice.ts";
import commentSlice from "./commentSlice.ts";

const store = configureStore({
  reducer: {
    movies: movieSlice,
    genres: genreSlice,
    favouriteMovies: favouriteMovieSlice,
    watchLaterMovies: watchLaterMovieSlice,
    comments: commentSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
