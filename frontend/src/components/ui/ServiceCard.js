/** @format */

import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <>
      <div className="pl-4 w-5/6 border rounded-xl mx-auto mb-8 border-1-[#A0A0A0] shadow-lg bg-[#e9e9e9] font-poppin hover:bg-[#fff] hover:shadow-md">
        <div className="pt-4 firstrow flex flex-row justify-between">
          <div>
            <p className="text-xl font-bold md:text-xl lg:text-3xl">
              {service.title}
            </p>
            <p className="text-sm font-medium md:text-base lg:text-lg">
              {service.category}
            </p>
          </div>
        </div>

        <p className="pt-2 pr-6 pb-2 text-justify md:text-sm lg:text-xl">
          {service.description}
        </p>

        <p className="pt-2 pr-6 pb-2 text-sm text-justify md:text-base lg:text-lg">
          {service.feedback}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
