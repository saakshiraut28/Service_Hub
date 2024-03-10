/** @format */

import React from "react";
import { Link } from "react-router-dom";
function Slogin() {
  return (
    
    <div class="flex h-screen w-screen items-center overflow-hidden px-2 bg-gradient-to-r from-cyan-100 to-sky-300">
        
    <div class="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
    <div class="mx-auto mb-2 space-y-3">
        
      <h1 class="text-center text-3xl font-bold text-gray-700">Service Login</h1>
    </div>

    <div>
      <div class="relative mt-2 w-full">
        <input type="text" id="email" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-600 focus:outline-none focus:ring-0" placeholder=" " />
        <label for="email" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">Email </label>
      </div>
    </div>

    <div>
      <div class="relative mt-2 w-full">
        <input type="password" id="password" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-600 focus:outline-none focus:ring-0" placeholder=" " />
        <label for="password" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">Password</label>
      </div>
    </div>

    <div class="flex w-full items-center">
      <Link to = "/Shome">
      <button class="shrink-0 inline-block w-36 rounded-lg bg-cyan-600 py-3 font-bold text-white">Login</button>
      </Link>
      <a class="w-full text-center text-sm font-medium text-gray-600 hover:underline" href="#">Forgot your password?</a>
    </div>
    <p class="text-center text-gray-600">
      Don't have an account?
      <a href="/Ssignup1" class="whitespace-nowrap font-semibold text-gray-900 hover:underline">Sign up</a>
    </p>
    </div>
    </div>

  );
}

export default Slogin;