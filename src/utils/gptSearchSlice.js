import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptStat: false,
    tmdbSuggestMovies: null,
    movieNames: null,
  },
  reducers: {
    toggleGptStat: (state) => {
      state.gptStat = !state.gptStat;
    },
    addSuggestMovies: (state, action) => {
      const { suggestedMovies, movieNames } = action.payload;
      state.tmdbSuggestMovies = suggestedMovies;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptStat, addSuggestMovies } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
