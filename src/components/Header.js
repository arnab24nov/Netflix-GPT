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
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHelpCenter } from "react-icons/md";
import { LiaSignOutAltSolid } from "react-icons/lia";

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
      <div className="absolute top-0 h-24 w-full px-[1.5%] bg-gradient-to-b from-black via-transparent flex flex-col md:flex-row justify-between items-center z-50 bg-black md:bg-transparent">
        <div className="grow">
          <img
            className="h-24
        "
            src={NETFLIX_LOGO}
            alt="Logo"
          />
        </div>
        <div className="flex">
          <div className="">
            <select
              onChange={handleLanguageChange}
              className="bg-red-600 text-white font-bold mr-4 px-2 py-1 rounded-lg"
              defaultValue={langKey === "en" ? "en" : "hi"}
            >
              <option value="en" className="text-[10px] md:text-[16px]">
                English
              </option>
              <option value="hi" className="text-[10px] md:text-[16px]">
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
      </div>
      {isMenuVisible && (
        <div>
          <div className="absolute right-32 md:right-12 top-32 md:top-[58px]">
            🔺
          </div>
          <div className="absolute right-4 md:right-8 top-40 md:top-20 rounded-sm bg-black w-32 md:w-40 px-2 py-3 z-50 text-[14px] md:text-[18px]">
            <div className="text-white mb-1 font-semibold cursor-pointer flex items-center">
              <RiAccountCircleLine size="20px" className="mr-2" />
              {lang[langKey].account}
            </div>
            <div className="text-white mb-1 font-semibold cursor-pointer flex items-center">
              <IoSettingsOutline size="20px" className="mr-2" />
              {lang[langKey].manageProfiles}
            </div>
            <div className="text-white mb-1 font-semibold cursor-pointer flex items-center">
              <MdOutlineHelpCenter size="20px" className="mr-2" />
              {lang[langKey].helpCentre}
            </div>
            <div
              className="text-white border-t-2 mt-5 pt-2 text-center border-t-slate-400 font-semibold cursor-pointer flex items-center"
              onClick={handleSignOutBtnClick}
            >
              <LiaSignOutAltSolid size="20px" className="mr-2" />
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
