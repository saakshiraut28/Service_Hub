/** @format */

import React from "react";
import Button from "./Button";

const ServiceCard = ({ service }) => {
  const isUserLoggedIn = !!sessionStorage.getItem("user_id");

  return (
    <>
      <div className="pt-4 px-4 firstrow flex flex-row justify-between">
        <div>
          <p className="text-xl font-bold md:text-xl lg:text-3xl">
            {service.title}
          </p>
          <p className="text-sm font-medium md:text-base lg:text-lg">
            {service.category}
          </p>
        </div>
      </div>
      <p className="pt-2 px-4 pr-6 pb-2 text-justify md:text-sm lg:text-xl">
        {service.description}
      </p>
      <p className="pt-2 px-4 pr-6 pb-2 text-sm text-justify md:text-base lg:text-lg">
        {service.feedback}
      </p>
    </>
  );
};

export default ServiceCard;
