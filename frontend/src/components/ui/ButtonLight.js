/** @format */

import React from "react";

function ButtonLight({ title }) {
  return (
    <>
      <button className="w-[200px] rounded-3xl py-1 px-2 border-[#1170B0] border-[1px] text-base text-nowrap font-[450] bg-[#FFFFFF] text-black hover:bg-[#1170B0] lg:text-lg hover:text-white">
        {title}
      </button>
    </>
  );
}

export default ButtonLight;
