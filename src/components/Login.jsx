import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IsSignin, setIsSignin] = useState(true);

  const toggleSignIn = () => {
    setIsSignin(!IsSignin);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="brackground_img"
        />
      </div>

      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-lg shadow-lg p-12 w-96">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {IsSignin ? "Sign In" : "Sign Up"}
        </h1>

        {!IsSignin && (
          <input
            type="text"
            placeholder="Full Name"
            className="py-3 px-6 mb-6 w-full rounded-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="py-3 px-6 mb-6 w-full rounded-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="py-3 px-6 mb-6 w-full rounded-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
        />

        <button className="py-3 px-6 mb-6 w-full bg-red-700 hover:bg-red-600 rounded-sm text-white font-bold focus:outline-none focus:ring-2 focus:ring-red-700">
          {IsSignin ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-center text-sm cursor-pointer"
          onClick={toggleSignIn}
        >
          {IsSignin ? "New to Netflix? Sign Up" : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
