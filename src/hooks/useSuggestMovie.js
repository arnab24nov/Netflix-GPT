import React from "react";
import { API_OPTION } from "../utils/constants";
import openai from "../utils/openAi";
import { addSuggestMovies } from "../utils/gptSearchSlice";
import { useDispatch } from "react-redux";

const useSuggestMovie = () => {
  const dispatch = useDispatch();

  const fetchMovieSuggestion = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const getGptSearchResult = async (searchKeyword) => {
    const gptQuery = `Act as a Movie recommendation system and suggest some movies for the query: ${searchKeyword}. Only give me 5 movies, comma separated like the example result given ahead. Example result: Golmaal, Dhamal, Don, War, Gangubai`;

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const movieNames = gptResult?.choices[0]?.message.content.split(",");

    const suggestMoviesPromiseArray = movieNames.map((movie) =>
      fetchMovieSuggestion(movie)
    );

    const suggestedMovies = await Promise.all(suggestMoviesPromiseArray);
    dispatch(
      addSuggestMovies({
        suggestedMovies: suggestedMovies,
        movieNames: movieNames,
      })
    );
  };
  return getGptSearchResult;
};

export default useSuggestMovie;
