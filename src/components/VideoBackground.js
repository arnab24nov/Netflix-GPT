import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ id }) => {
  useTrailerVideo(id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className=" h-screen md:h-fit w-screen md:w-screen aspect-video -mt-48 md:mt-0 -mb-72 md:mb-0"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
