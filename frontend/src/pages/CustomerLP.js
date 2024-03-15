/** @format */
import React from "react";

function LandingPage() {
  return (
    <>
      {/*******     Hero Section      **********/}
      <section className="hero-section md:px-10 px-4 py-24 justify-center text-center bg-[#D2EDFA] font-poppin space-y-6">
        <p className="text-[#012A45] font-black md:text-4xl text-2xl leading-normal ">
          <p>Get your work done</p>
          <p>In just few clicks ;)</p>
        </p>
        <p className="text-lg text-[#012A45] font-medium">
          Sending our helpers to your doorsteps.
        </p>
        <input
          className="bg-white md:min-w-[500px] min0woutline-none hover:border hover:border-[#012A45] rounded-full px-4 py-1"
          placeholder="Hire someone to do your task."
        />
      </section>
      {/*******     Services Section      **********/}
      <section className="services-section px-4 py-12 lg:px-24 lg:py-24 font-poppin space-y-6 ">
        <p className="text-xl text-[#012A45] font-bold">
          Search from the below categories:
        </p>
        <div className=""></div>
      </section>
      <hr />
      {/*******     Trending Providers Section      **********/}
      <section className="trending-section px-4 py-12 lg:px-24 lg:py-24 font-poppin space-y-6 ">
        <div className="md:grid-cols-2">
          <div className="grid space-y-6">
            <p className="text-xl text-[#012A45] font-bold">
              Trending Providers.
            </p>
            <p className="text-lg text-[#012A45] font-medium">
              Our Top Service Providers.
            </p>
          </div>
          <div className="">Cards</div>
        </div>
      </section>
      {/*******    Happy Customer Section      **********/}
      <section className="customer-section px-4 py-12 lg:px-24 lg:py-24 font-poppin space-y-6 justify-center items-center">
        <p className="text-xl text-[#012A45] font-bold text-center">
          Happy Customers!
        </p>
        <p className="text-lg text-[#012A45] font-medium text-center">
          Provide your valuable feedback on{" "}
          <span className="text-[#1170B0] underline ">Play Store</span>.
        </p>
      </section>
    </>
  );
}

export default LandingPage;
