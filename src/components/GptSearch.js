import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";
import { BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="flex flex-col justify-start h-screen">
      <div className="fixed -z-10">
        <img
          src={BG_IMAGE}
          alt="background"
          className="opacity-80 h-screen md:h-fit object-cover"
        />
      </div>
      <GptSearchBar />
      <GptSearchSuggestion />
    </div>
  );
};

export default GptSearch;
