import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  // const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleSignOutBtnClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("error in sign out==>", error);
      });
  };
  const handleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <div className="absolute top-0 h-24 w-full px-[1.5%] bg-gradient-to-b from-black via-transparent flex justify-between items-center">
        <img
          className="h-24"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
        {/* pathname !== "/" */}
        {user && (
          <img
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            alt="user-icon"
            className="mr-6"
            onClick={handleMenuVisibility}
          />
        )}
      </div>
      {isMenuVisible && (
        <div>
          <div className="absolute right-12 top-[58px]">🔺</div>
          <div className="absolute right-8 top-20 rounded-sm bg-black w-32  px-2 py-3">
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
