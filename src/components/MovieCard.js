import React from "react";
import { IMAGE_PATH } from "../utils/constants";

function MovieCard({ movieDetails }) {
  return (
    <div className="w-48 pr-4">
      <img
        src={`${IMAGE_PATH}${movieDetails.poster_path}`}
        alt="movie poster"
      />
    </div>
  );
}

export default MovieCard;
