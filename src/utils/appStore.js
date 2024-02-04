import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptSearchReducer from "./gptSearchSlice";
import languageReducer from "./languageSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptSearchReducer,
    language: languageReducer,
  },
});

export default appStore;
