/** @format */

import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="w-full space-x-4">
        <span className="text-3xl font-bold">This is home page</span>
        <Link to="/about">
          <button className="px-10 bg-indigo-500 ">Click me part 1</button>
          <button className="px-10 bg-indigo-500 ">Click me part 2</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
