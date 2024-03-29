/** @format */

import React from "react";

function Button({ title }) {
  return (
    <>
      <button className="w-[200px] py-1 px-2 text-md font-semibold bg-[#012A45] text-white hover:bg-[#34556C] rounded-full my-4">
        {title}
      </button>
    </>
  );
}

export default Button;
