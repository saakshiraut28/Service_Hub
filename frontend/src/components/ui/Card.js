/** @format */

import React from "react";

function Card({ provider }) {
  return (
    <>
      <div className="w-full border border-1-[#A0A0A0] shadow-lg bg-[#EEEEEE] font-poppin px-4 py-10 hover:bg-[#fff] hover:shadow-md">
        <div className="flex flex-col md:flex-row items-center md:px-6 px-3 justify-center md:justify-start">
          <div className="flex w-sm">Image</div>
          <div className="justify-around px-4 space-y-3">
            <p className="text-[#012A45] font-bold text-xl">{provider.name}</p>
            <p className="text-[#012A45] font-medium text-sm">
              {provider.address} | {provider.email} | {provider.contact}
            </p>
            <p className="w-fit text-white font-medium text-sm bg-[#1170B0] px-4 rounded-full py-1 ">
              {provider.category}
            </p>
            <p className="text-md py-4 text-justify">{provider.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
