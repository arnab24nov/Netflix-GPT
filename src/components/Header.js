import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, revoveUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
  return (
    <>
      <div className="absolute top-0 h-24 w-full px-[1.5%] bg-gradient-to-b from-black via-transparent flex justify-between items-center z-50">
        <img className="h-24" src={NETFLIX_LOGO} alt="Logo" />
        {user && (
          <img
            src={USER_ICON}
            alt="user-icon"
            className="mr-6"
            onClick={handleMenuVisibility}
          />
        )}
      </div>
      {isMenuVisible && (
        <div>
          <div className="absolute right-12 top-[58px]">🔺</div>
          <div className="absolute right-8 top-20 rounded-sm bg-black w-32  px-2 py-3 z-50">
            <div className="text-white mb-1 font-semibold cursor-pointer">
              Account
            </div>
            <div className="text-white mb-1 font-semibold cursor-pointer">
              Manage Profiles
            </div>
            <div className="text-white mb-1 font-semibold cursor-pointer">
              Help Centre
            </div>
            <div
              className="text-white border-t-2 mt-5 pt-2 text-center border-t-slate-400 font-semibold cursor-pointer"
              onClick={handleSignOutBtnClick}
            >
              Sign Out
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

// bg-gradient-to-b from-black
