/** @format */

import React from "react";

function ButtonLight({ title }) {
  return (
    <>
      <button className="w-[216px] h-[50px] rounded-3xl py-1 px-2 border-[#1170B0] border-[1px] text-xl font-medium bg-[#FFFFFF] text-black hover:bg-[#1170B0] ">
        {title}
      </button>
    </>
  );
}

export default ButtonLight;
