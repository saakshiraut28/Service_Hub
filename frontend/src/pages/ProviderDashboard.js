/** @format */

import React from "react";
import ButtonDark from "../components/ui/ButtonDark";
import ServiceCard from "../components/ui/ServiceCard";

const ProviderDashboard = () => {
  return (
    <>
      <section className="providerdetails font-poppin mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="image md:w-1/3 place-self-center lg:w-1/5">
            <div className="photo my-4 w-32 h-32 bg-[#e9e9e9] rounded-full md:h-40 md:w-40 md:mx-8 lg:h-48 lg:w-48 lg:ml-12 xl:ml-20 xl:w-52 xl:h-52"></div>
          </div>

          <div className="text md:w-2/3 lg:w-4/5 lg:pl-16 lg:pr-16">
            <div className="heading name text-2xl font-bold text-center md:text-justify md:pt-8 font-bold text-xl">
              Full Name
            </div>
            <div className="city text-center md:text-justify md:text-lg xl:pb-4">
              City
            </div>
            <div className="bio m-8 mb-5 mt-1 text-justify md:ml-0 md:text-sm xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </div>
          </div>
        </div>

        <div className="button ml-14 mb-6 md:pl-60 lg:pl-96 xl:pl-96">
          <ButtonDark title="Edit Profile" />
        </div>
      </section>

      <hr />

      <section className="mt-8 font-poppin">
        <p className="mt-2 mb-4 font-bold text-xl text-center md:text-2xl text-[#1170B0]">
          Services:
        </p>

        <div className="flex flex-col">
          <ServiceCard />
          <ServiceCard />
        </div>
      </section>
    </>
  );
};

export default ProviderDashboard;
