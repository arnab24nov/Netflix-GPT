import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </>
  );
};

export default Browse;
