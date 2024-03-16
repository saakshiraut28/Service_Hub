/** @format */

import React from "react";

function ButtonDark({ title }) {
  return (
    <>
      <button className="w-[40%] h-[30%] rounded-3xl py-1 mx-12 border-[#1170B0] border-[1px] text-base text-nowrap font-[450] bg-[#1170B0] text-white hover:bg-[#1170B0] 
       md:w-[20%] md:h-[60%] md:mx-auto lg:w-[20%] lg:text-lg">
        {title}
      </button>
    </>
  );
}

export default ButtonDark;


// deleted classes
// w-[216px]
// h-[50px]

