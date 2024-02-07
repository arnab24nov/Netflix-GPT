import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import useSuggestMovie from "../hooks/useSuggestMovie";
import { addSuggestMovies } from "../utils/gptSearchSlice";

function GptSearchBar() {
  const langKey = useSelector((store) => store.language.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  const clickForSearchMovie = useSuggestMovie();

  const handleSearchBtnClick = () => {
    dispatch(
      addSuggestMovies({
        suggestedMovies: null,
        movieNames: null,
      })
    );
    clickForSearchMovie(searchText.current.value);
  };

  return (
    <div className="absolute flex justify-center items-center mt-32 left-1/2 transform -translate-x-1/2 px-20 py-5 bg-black z-50">
      <input
        type="text"
        placeholder={lang[langKey].watchToday}
        className=" w-96 mr-3 px-2 py-1.5 rounded-lg border border-red-500"
        ref={searchText}
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
