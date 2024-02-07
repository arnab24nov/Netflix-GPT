import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";
import { BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="flex flex-col justify-start h-screen">
      <div className="fixed -z-10">
        <img src={BG_IMAGE} alt="background" className="" />
      </div>
      <GptSearchBar />
      <GptSearchSuggestion />
    </div>
  );
};

export default GptSearch;
