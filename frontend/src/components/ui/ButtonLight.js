/** @format */

import React from "react";

function ButtonLight({ title }) {
  return (
    <>
      <button className="w-[30%] h-[25%] rounded-3xl py-1 px-2 border-[#1170B0] border-[1px] text-base text-nowrap font-[450] bg-[#FFFFFF] text-black hover:bg-[#1170B0]
      md:w-[20%] md:h-[60%] lg:w-[15%] lg:text-lg">
        {title}
      </button>
    </>
  );
}

export default ButtonLight;