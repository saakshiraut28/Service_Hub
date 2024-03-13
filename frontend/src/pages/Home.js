/** @format */

import Button from "../components/ui/Button.js";
import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="w-full space-x-4">
        <span className="text-3xl font-bold">This is home page</span>
        <button className="w-[200px] py-1 px-2 text-md font-semibold bg-[#012A45] text-white hover:bg-[#34556C] ">
          Hello
        </button>
      </div>
    </>
  );
}

export default Home;
