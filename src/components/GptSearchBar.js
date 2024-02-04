import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

function GptSearchBar() {
  const langKey = useSelector((store) => store.language.lang);

  const handleSearchBtnClick = () => {
    console.log("search button clicked");
  };

  return (
    <div className=" absolute flex justify-center items-center top-[20%] left-1/2 transform -translate-x-1/2 px-20 py-5 bg-black">
      <input
        type="text"
        placeholder={lang[langKey].watchToday}
        className=" w-96 mr-3 px-2 py-1.5 rounded-lg border border-red-500"
      />
      <button
        className="bg-red-600 text-white rounded-lg px-3 py-1.5"
        onClick={handleSearchBtnClick}
      >
        {lang[langKey].search}
      </button>
    </div>
  );
}

export default GptSearchBar;
