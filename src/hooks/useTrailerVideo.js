import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    movieBg();
  }, []);
  const movieBg = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTION
    );
    const json = await data.json();
    const filteredData = json.results.filter((el) => el.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useTrailerVideo;
