import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTopRatedTvSeries } from "../utils/movieSlice";

const useTopRatedTvSeries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedTvSeries();
  }, []);

  const getTopRatedTvSeries = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTION
    );
    let json = await data.json();
    dispatch(addTopRatedTvSeries(json.results));
  };
};

export default useTopRatedTvSeries;
