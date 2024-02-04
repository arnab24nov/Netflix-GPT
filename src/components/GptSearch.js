import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";
import { BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div>
        <img
          src={BG_IMAGE}
          alt="background"
          className="w-screen h-[100vh] -z-20 opacity-80"
        />
      </div>
      <GptSearchBar />
      <GptSearchSuggestion />
    </>
  );
};

export default GptSearch;
