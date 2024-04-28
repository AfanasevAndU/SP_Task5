import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchMovieData = createAsyncThunk("movie/fetchMoviesData", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/11?api_key=70c2db40c936ec13adfbb528363439b7"
  );
  const movies = await response.data;
  return movies;
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    loading: false,
    movies: null,
    error: "",
  },
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
  },
});

export { fetchMovieData };

export default movieSlice.reducer;
