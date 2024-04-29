import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Genre {
  id: string;
  name: string;
}
export type Genres = Array<Genre>;

export interface GenreState {
  loading: boolean;
  genres: {
    genre?: Genres;
  };
  error: string;
}

const fetchGenresData = createAsyncThunk("movie/fetchGenresData", async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=70c2db40c936ec13adfbb528363439b7`
  );
  const genres = await response.data;
  console.log(genres);
  return genres;
});

const initialState: GenreState = {
  loading: false,
  genres: {},
  error: "",
};

const genreSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenresData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchGenresData.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
      })
      .addCase(fetchGenresData.rejected, (state) => {
        state.loading = false;
        state.error = "Ошибка";
      });
    builder;
  },
});

export { fetchGenresData };

export default genreSlice.reducer;
