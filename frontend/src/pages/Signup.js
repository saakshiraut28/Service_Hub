/** @format */

import React from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

function Signup() {
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
        <div className="bg-white border border-[#585858] shadow-lg py-4 px-2 md:px-6 md:py-8">
          <span className="font-bold text-xl text-[#012A45]">
            Get your all chores done in just few clicks 🤯.
          </span>
          <form className="flex flex-col justify-center items-center py-8 w-full px-4 ">
            <input
              className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
              placeholder="Name"
              type="text"
            />
            <input
              className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
              placeholder="Email"
              type="email"
            />
            <input
              className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
              placeholder="Password"
              type="password"
            />
            <Button title={"Signup"} />
            <span className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="hover:text-[#1170B0] underline">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
