import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Movie {
  id: string;
  title: string;
  release_date: string;
  description: string;
  genre_ids: string[];
  rating: string;
  poster_path: string;
  actors: {
    name: string;
    surname: string;
  };
}

export type Movies = Array<Movie>;

export interface MovieState {
  loading: boolean;
  movies: {
    results?: Movies;
  };
  error: string;
}

const fetchMovieData = createAsyncThunk("movie/fetchMoviesData", async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=70c2db40c936ec13adfbb528363439b7`
  );
  const movies = await response.data;
  console.log(movies);
  return movies;
});

const initialState: MovieState = {
  loading: false,
  movies: {},
  error: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchMovieData.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovieData.rejected, (state) => {
        state.loading = false;
        state.error = "Ошибка";
      });
    builder;
  },
});

export { fetchMovieData };

export default movieSlice.reducer;
