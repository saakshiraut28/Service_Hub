/** @format */

import React from "react";
import Card from "../components/ui/Card";

function ServicePage() {
  return (
    <>
      <div className="container px-4 lg:px-24 py-10 font-poppin">
        <div className="flex w-full items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <p className="title font-bold text-3xl text-[#033556] py-4 text-center">
          Say hi to our Electricians! 👨‍🔧
        </p>
        <div className="py-3 w-full">
          <Card
            img="Hii"
            name="Name Surname"
            category="Category: Electrician"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text... Read more"
            className="py-3"
          />
        </div>
        <div className="py-3 w-full">
          <Card
            img="Hii"
            name="Name Surname"
            category="Category: Electrician"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text... Read more"
            className="py-3"
          />
        </div>
      </div>
    </>
  );
}

export default ServicePage;
