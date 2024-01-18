import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute right-0 left-0 top-[20%] mx-auto h-[600px] w-[450px] bg-black bg-opacity-70 rounded-md">
        <div className="mx-auto my-12 w-[70%]">
          <h1 className="text-white text-[30px] font-bold my-6">
            {isSignIn ? "Sign In" : "Sign up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Name"
              className=" h-12 p-4 mb-4 w-full bg-zinc-800 rounded-md text-white"
            />
          )}
          <input
            type="text"
            placeholder="Email or phone number"
            className=" h-12 p-4 mb-4 w-full bg-zinc-800 rounded-md text-white"
          />
          <input
            type="Password"
            placeholder="Password"
            className="h-12 p-4 mb-4 w-full bg-zinc-800 rounded-md text-white"
          />
          <button className="h-12 w-full mt-6 mb-4 bg-red-600 text-white font-semibold rounded-md">
            {isSignIn ? "Sign in" : "Sign up"}
          </button>
          {isSignIn && (
            <div className="flex items-center justify-between mb-4 text-[12px]">
              <label htmlFor="rememberMe" className="text-white">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                Remember me
              </label>
              <p className=" cursor-pointer hover:underline text-white">
                Need help?
              </p>
            </div>
          )}

          <p className="text-slate-400">
            {isSignIn ? "New to Netflix?" : "Already register?"}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleToggleSignInForm}
            >
              {isSignIn ? " Sign Up now." : " Sign in now."}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
