import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice.ts";

const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
