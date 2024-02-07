import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" px-3 md:px-6">
      <div className=" py-3 md:py-6 text-white text-[16px] md:text-[18px] font-semibold">
        {title}
      </div>
      <div className="flex w-[100%] overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movieDetails={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
