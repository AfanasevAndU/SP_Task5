import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice.ts";
import genreSlice from "./genre.Slice.ts";

const store = configureStore({
  reducer: {
    movies: movieSlice,
    genres: genreSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
