/** @format */
import React from "react";
import ButtonLight from "../components/ui/ButtonLight.js";

function HomePageBL() {
  return (
    <>
      {/*******     Hero Section      **********/}
      <section className="hero-section md:px-10 px-4 py-24 justify-center text-center bg-[#D2EDFA] font-poppin space-y-6">
        <p className="text-[#012A45] font-black md:text-4xl text-2xl leading-normal space-y-3">
          <p>Need help with your daily</p>
          <p>or occasional chores?</p>
        </p>
        <p className="text-lg text-[#012A45] font-medium">
          We are here for you.
        </p>

        <div className="space-x-20">
          <ButtonLight title="Login" />
          <ButtonLight title="Sign Up" />
        </div>
      </section>
      <hr />

      {/*******     About Section      **********/}
      <section className = "m-[2px] flex bg-[#D2EDFA] font-poppin text-[#012A45]">
        <div className = "about-para">
          <p className = "pt-6 pl-8 font-black text-5xl">About Us</p>
          <p className = "pt-6 pl-8 text-xl font-medium w-[689px] h-[425px]">
            Lorem ipsum jdnadb fvjnifvn Lorem ipsum jdnadb fvjnifvn Lorem ipsum
            jdnadb fvjnifvn Lorem ipsum jdnadb fvjnifvn Lorem ipsum jdnadb
            fvjnifvn Lorem ipsum jdnadb fvjnifvn Lorem ipsum jdnadb fvjnifvn Lorem
            ipsum jdnadb fvjnifvn Lorem ipsum jdnadb fvjnifvn Lorem ipsum jdnadb
            fvjnifvn Lorem ipsum jdnadb fvjnifvn Lorem ipsum jdnadb fvjnifvn Lorem
            ipsum jdnadb fvjnifvn Lorem ipsum jdnadb fvjnifvn Lorem ipsum jdnadb
            fvjnifvn Lorem ipsum jdnadb fvjnifvn Lorem ipsum jdnadb fvjnifvn Lorem
            ipsum jdnadb fvjnifvn Lorem ipsum jdnadb fvjnifvn
          </p>
        </div>
        <div className = "team flex justify-center items-center">
          <div className = "border-slate-100 border-2 bg-[#3d1c1c] w-[20px] h-[20px]"></div>
          <div className = "border-slate-100 border-2 bg-[#000000] w-[20px] h-[20px]"></div>
          <div className = "border-slate-100 border-2 bg-[#000000] w-[20px] h-[20px]"></div>
        </div>
        
      </section>
    </>
  );
}

export default HomePageBL;
