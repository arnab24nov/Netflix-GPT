import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { addTrailerDetails } from "../utils/movieSlice";

function MainComponent() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  useEffect(() => {
    if (movies && movies.length > 0) {
      const { original_title, overview } = movies[0];
      dispatch(
        addTrailerDetails({ title: original_title, overview: overview })
      );
    }
  }, [dispatch, movies]);

  if (!movies) return;

  return (
    <div className="">
      <VideoTitle />
      <VideoBackground id={movies[0].id} />
    </div>
  );
}

export default MainComponent;
