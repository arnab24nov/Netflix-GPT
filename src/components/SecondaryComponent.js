import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);
  // cons;
  return (
    <div className=" bg-black">
      <div className="-mt-64 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        <MovieList title={"TV Series"} movies={movies?.topRatedTvSeries} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
