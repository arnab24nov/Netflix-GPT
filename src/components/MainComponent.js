import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

function MainComponent() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const { id, original_title, overview } = movies[0];
  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
}

export default MainComponent;
