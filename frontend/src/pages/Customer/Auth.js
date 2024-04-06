/** @format */

import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function UserAuth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="container px-4 py-8 lg:px-24 font-poppin">
      <div className="flex w-full items-center justify-start my-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>

      <div className="container flex  justify-center items-center">
        <div className="container flex justify-center items-center">
          <div className="bg-white border border-[#585858] shadow-lg py-4 px-2 md:px-6 md:py-8">
            <div>
              <button
                onClick={toggleAuthMode}
                className="underline font-medium text-center py-3 w-full"
              >
                {isLogin
                  ? "Don't have an account? Signup"
                  : "Already have an account? Login"}
              </button>
            </div>
            <span className="font-bold text-xl text-[#012A45]">
              Welcome to Chakde Chores 🙏.
            </span>
            {isLogin ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAuth;
