import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestion = () => {
  const { tmdbSuggestMovies, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;
  return (
    <div className="mx-4 mt-80 bg-black pb-10  text-white opacity-80">
      {movieNames.map((movie, index) => (
        <MovieList
          key={movie}
          title={movie}
          movies={tmdbSuggestMovies[index]}
        />
      ))}
    </div>
  );
};

export default GptSearchSuggestion;
