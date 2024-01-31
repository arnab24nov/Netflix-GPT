import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedTvSeries from "../hooks/useTopRatedTvSeries";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTopRatedTvSeries();
  return (
    <>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </>
  );
};

export default Browse;
