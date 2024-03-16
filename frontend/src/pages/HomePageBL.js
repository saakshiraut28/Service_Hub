/** @format */
import React from "react";
import ButtonLight from "../components/ui/ButtonLight.js";
import ButtonDark from "../components/ui/ButtonDark.js";
import TeamCard from "../components/ui/TeamCard.js";
import ContactCard from "../components/ui/ContactCard.js";

function HomePageBL() {
  return (
    <>
      {/*******     Hero Section      **********/}
      <section className="hero-section md:px-10 px-4 py-24 justify-center text-center bg-[#D2EDFA] font-poppin space-y-6 lg:space-y-14 lg:p-20">
        <p className="text-[#012A45] font-black md:text-4xl text-2xl leading-normal lg:text-5xl lg:space-y-3">
          <p className="text-pretty">Need help with your daily</p>
          <p className="text-pretty m-0">or occasional chores?</p>
        </p>
        <p className="text-lg text-[#012A45] font-medium lg:text-xl">
          We are here for you.
        </p>

        <div className="flex flex-col items-center space-y-6 xl:flex md:flex-row md:space-y-0 md:space-x-12 md:justify-center">
          <ButtonLight title="Login" />
          <ButtonLight title="Sign Up" />
        </div>
      </section>
      <hr />

      {/*******     About Section      **********/}
      <section className="flex flex-col bg-[#D2EDFA] font-poppin text-[#012A45] w-[100%] lg:flex-row">
        {/* Left Half */}
        <div className="lg:w-[49%] flex flex-col ml-4">
          <div className="about-para pl-2 lg:ml-4">
            <p className="pt-6 pb-4 font-black text-4xl md:text-center lg:text-5xl lg:text-left">About Us</p>
            <p className="mr-4 text-base font-medium text-justify lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Right Half */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="p-4 pt-8 flex flex-col space-y-24 md:flex md:flex-row md:space-y-0 md:p-0 md:space-x-8
          lg:flex-col lg:space-y-20">
            {/* Circle 1 */}
            <TeamCard
              fullName="Shrimayee Mishra"
              role="Computer Engineering Student"
            />
            {/* Circle 3 */}
            <TeamCard
              fullName="Arfia Shaikh"
              role="Computer Engineering Student"
            />
          </div>
          <div
            className="p-4 flex flex-col items-center"
            style={{ marginLeft: "10px" }}
          >
            {/* Circle 2 */}
            <TeamCard
              fullName="Saakshi Raut"
              role="Computer Engineering Student"
            />
          </div>
        </div>
      </section>
      <hr />

      {/*******     Contact Section      **********/}
      <section className="contact font-poppin text-[#012A45] bg-[#D2EDFA]">
      <p className="pt-6 pb-4 pl-7 font-black text-4xl md:pl-0 md:text-center lg:text-5xl lg:text-left lg:ml-10">Contact Us:</p>
        <div className="flex flex-col items-center lg:flex-row">
          <ContactCard />

          <div className="form text-base font-medium lg:ml-4 lg:pl-4 lg:text-lg lg:font-semibold">
            <div className="firstRow flex flex-col md:flex-row md:space-x-20 lg:space-x-10">
              <div className="pt-5 firstName">
                <p className="pl-0">First Name: </p>
                <input className="w-[265px] border-[1px] border-[#1070B0] bg-[#E9E9E9] rounded-md lg:w-[300px]" />
              </div>

              <div className="pt-5 lastName">
                <p className="pl-0">Last Name: </p>
                <input className="w-[265px] border-[1px] border-[#1070B0] bg-[#E9E9E9] rounded-md lg:w-[300px]" />
              </div>
            </div>

            <div className="secondRow flex flex-col md:flex-row md:space-x-20 lg:space-x-10">
              <div className="pt-5 email">
                <p className="pl-0">Email: </p>
                <input className="w-[265px] border-[1px] border-[#1070B0] bg-[#E9E9E9] rounded-md lg:w-[300px]" />
              </div>

              <div className="pt-5 phoneNumber">
                <p className="pl-0">Phone Number: </p>
                <input className="w-[265px] border-[1px] border-[#1070B0] bg-[#E9E9E9] rounded-md lg:w-[300px]" />
              </div>
            </div>

            <div className="pt-5 thirdRow message">
              <p className="pl-0">Message: </p>
              <input className="w-[250px] h-[100px] border-[1px] border-[#1070B0] bg-[#E9E9E9] rounded-md md:w-[600px] md:h-[80px] lg:w-[600px]" />
            </div>

            <div className="m-8 md:my-4 md:mx-0">
              <ButtonDark title="Submit" />
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default HomePageBL;
