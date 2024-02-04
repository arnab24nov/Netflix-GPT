import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptStat: false,
  },
  reducers: {
    toggleGptStat: (state) => {
      state.gptStat = !state.gptStat;
    },
  },
});

export const { toggleGptStat } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
