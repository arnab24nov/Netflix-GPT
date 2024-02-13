import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import useSuggestMovie from "../hooks/useSuggestMovie";
import { addSuggestMovies } from "../utils/gptSearchSlice";
import { IoSearchSharp } from "react-icons/io5";

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
    <div className="absolute flex justify-center items-center mt-40 md:mt-32 left-1/2 transform -translate-x-1/2 px-4 md:px-12 py-3 md:py-5 bg-black z-50">
      <input
        type="text"
        placeholder={lang[langKey].watchToday}
        className="w-72 md:w-96 mr-3 px-2 py-1.5 rounded-lg border border-red-500"
        ref={searchText}
      />
      <button
        className="bg-red-600 text-white rounded-lg px-3 py-1.5 flex items-center"
        onClick={handleSearchBtnClick}
      >
        <IoSearchSharp size="1.5rem" className="mr-1" />
        {lang[langKey].search}
      </button>
    </div>
  );
}

export default GptSearchBar;
