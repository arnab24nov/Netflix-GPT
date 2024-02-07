import React from "react";
import { API_OPTION, IMAGE_PATH } from "../utils/constants";
import { addTrailerDetails, addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

function MovieCard({ movieDetails }) {
  const dispatch = useDispatch();

  const handlePosterClick = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieDetails.id}/videos`,
      API_OPTION
    );
    const json = await data.json();
    const filteredData = json.results.filter((el) => el.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    dispatch(
      addTrailerDetails({
        title: movieDetails.original_title || movieDetails.original_name,
        overview: movieDetails.overview,
      })
    );
  };

  if (!movieDetails.poster_path) return;
  return (
    <div className="w-48 pr-4 cursor-pointer transition-transform duration-300 hover:scale-95">
      <img
        src={`${IMAGE_PATH}${movieDetails.poster_path}`}
        alt="movie poster"
        onClick={handlePosterClick}
      />
    </div>
  );
}

export default MovieCard;
