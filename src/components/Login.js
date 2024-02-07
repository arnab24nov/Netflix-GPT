import { useState, useRef } from "react";
import Header from "./Header";
import {
  checkValidateName,
  checkValidateEmail,
  checkValidatePassword,
} from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE } from "../utils/constants";
import lang from "../utils/languageConstants";

const Login = () => {
  const langKey = useSelector((store) => store.language.lang);
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [nameErrMessage, setNameErrMessage] = useState(null);
  const [emailErrMessage, setEmailErrMessage] = useState(null);
  const [passwordErrMessage, setPasswordErrMessage] = useState(null);
  const [authErrMessage, setAuthErrMessage] = useState(null);

  const handleToggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setNameErrMessage(null);
    setEmailErrMessage(null);
    setPasswordErrMessage(null);
    setAuthErrMessage(null);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const nameMsg = checkValidateName(name.current && name.current.value);
    nameMsg
      ? setNameErrMessage(langKey === "en" ? nameMsg : lang[langKey].nameMsg)
      : setNameErrMessage(null);

    const emailMsg = checkValidateEmail(email.current.value);
    emailMsg
      ? setEmailErrMessage(langKey === "en" ? emailMsg : lang[langKey].emailMsg)
      : setEmailErrMessage(null);

    const passMsg = checkValidatePassword(password.current.value);
    passMsg
      ? setPasswordErrMessage(
          langKey === "en" ? passMsg : lang[langKey].passMsg
        )
      : setPasswordErrMessage(null);

    if (nameMsg || emailMsg || passMsg) return;

    if (!isSignIn) {
      //Sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://tse4.mm.bing.net/th?id=OIP.TctatNGs7RN-Dfc3NZf91AAAAA&pid=Api&P=0&h=180",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {});
        })
        .catch((error) => {
          setAuthErrMessage(error.code + "- " + error.message);
        });
    } else {
      //Sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          setAuthErrMessage(error.code + "- " + error.message);
        });
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
      <Header />
      <div>
        <img
          src={BG_IMAGE}
          alt="background"
          className="h-screen md:h-fit object-cover w-screen"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute right-0 left-0 top-[20%] mx-auto h-[540px] md:h-[600px] w-80 md:w-[450px] bg-black bg-opacity-70 rounded-md"
      >
        <div className="mx-auto my-12 w-[70%]">
          <h1 className="text-white text-[30px] font-bold my-6">
            {isSignIn ? lang[langKey].signIn : lang[langKey].signUp}
          </h1>
          {authErrMessage && (
            <p className="text-orange-600 text-[13px] mb-3">{authErrMessage}</p>
          )}
          {!isSignIn && (
            <div>
              <input
                ref={name}
                type="text"
                placeholder={lang[langKey].name}
                className=" h-12 p-4 mb-4 w-full bg-zinc-800 rounded-md text-white"
              />
              {nameErrMessage && (
                <p className="text-orange-600 text-[13px] mb-3">
                  {nameErrMessage}
                </p>
              )}
            </div>
          )}
          <input
            ref={email}
            type="text"
            placeholder={lang[langKey].email}
            className=" h-12 mb-4 p-4 w-full bg-zinc-800 rounded-md text-white"
          />
          {emailErrMessage && (
            <p className="text-orange-600 text-[13px] mb-3">
              {emailErrMessage}
            </p>
          )}
          <input
            ref={password}
            type="Password"
            placeholder={lang[langKey].password}
            className="h-12 p-4 mb-4 w-full bg-zinc-800 rounded-md text-white "
          />
          {passwordErrMessage && (
            <p className="text-orange-600 text-[13px] mb-3">
              {passwordErrMessage}
            </p>
          )}

          <button
            onClick={handleButtonClick}
            className="h-12 w-full mt-6 mb-4 bg-red-600 text-white font-semibold rounded-md"
          >
            {isSignIn ? lang[langKey].signIn : lang[langKey].signUp}
          </button>
          {isSignIn && (
            <div className="flex items-center justify-between mb-4 text-[12px]">
              <label htmlFor="rememberMe" className="text-white">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                {lang[langKey].rememberMe}
              </label>
              <p className=" cursor-pointer hover:underline text-white">
                {lang[langKey].needHelp}
              </p>
            </div>
          )}

          <p className="text-slate-400">
            {isSignIn
              ? lang[langKey].newToNetflix
              : lang[langKey].alreadyRegister}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleToggleSignInForm}
            >
              {isSignIn ? lang[langKey].signUpNow : lang[langKey].signInNow}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
