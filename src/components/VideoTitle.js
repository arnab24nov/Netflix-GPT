import React, { useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.language.lang);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="w-screen aspect-video px-20 py-60 bg-transparent absolute top-0 bg-gradient-to-r from-black via-transparent ">
      <div className=" text-white font-extrabold text-[30px] mb-4">{title}</div>
      {showInfo && (
        <div className="text-white font-semibold w-2/5">{overview}</div>
      )}
      <div className="my-10 font-bold text-slate-700 flex justify-start items-center">
        <button className="px-5 py-1 mr-3 flex justify-between items-center rounded-md bg-white hover:opacity-70">
          <img
            className="w-4 mr-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Octicons-playback-play.svg/24px-Octicons-playback-play.svg.png"
            alt="play-icon"
          />
          {lang[langKey].play}
        </button>
        <button
          className="px-5 py-2 flex justify-between items-center rounded-md bg-white hover:opacity-70"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          <img
            className="w-6 mr-3"
            src="https://cdn-icons-png.flaticon.com/128/471/471713.png"
            alt="infi-icon"
          />
          {lang[langKey].moreInfo}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
