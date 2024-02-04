import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, revoveUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { toggleGptStat } from "../utils/gptSearchSlice";
import { changeLanguage } from "../utils/languageSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.gptStat);
  const langKey = useSelector((store) => store.language.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(revoveUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleSignOutBtnClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptStat());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute top-0 h-24 w-full px-[1.5%] bg-gradient-to-b from-black via-transparent flex justify-between items-center z-50">
        <div className="grow">
          <img
            className="h-24
        "
            src={NETFLIX_LOGO}
            alt="Logo"
          />
        </div>
        <div>
          <select
            onChange={handleLanguageChange}
            className="bg-red-600 text-white font-bold mr-4 px-2 py-1 rounded-lg"
          >
            <option value="en" selected={langKey === "en"}>
              English
            </option>
            <option value="hi" selected={langKey === "hi"}>
              हिन्दी
            </option>
          </select>
        </div>
        {user && (
          <div className="flex items-center">
            <button
              className="bg-red-600 text-white font-bold mr-4 px-2 py-1 rounded-lg"
              onClick={handleGptSearchClick}
            >
              {gpt ? lang[langKey].home : lang[langKey].gptSearch}
            </button>
            <img
              src={USER_ICON}
              alt="user-icon"
              className="mr-6 cursor-pointer"
              onClick={handleMenuVisibility}
            />
          </div>
        )}
      </div>
      {isMenuVisible && (
        <div>
          <div className="absolute right-12 top-[58px]">🔺</div>
          <div className="absolute right-8 top-20 rounded-sm bg-black w-40 px-2 py-3 z-50">
            <div className="text-white mb-1 font-semibold cursor-pointer">
              {lang[langKey].account}
            </div>
            <div className="text-white mb-1 font-semibold cursor-pointer">
              {lang[langKey].manageProfiles}
            </div>
            <div className="text-white mb-1 font-semibold cursor-pointer">
              {lang[langKey].helpCentre}
            </div>
            <div
              className="text-white border-t-2 mt-5 pt-2 text-center border-t-slate-400 font-semibold cursor-pointer"
              onClick={handleSignOutBtnClick}
            >
              {lang[langKey].signOut}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

// bg-gradient-to-b from-black
