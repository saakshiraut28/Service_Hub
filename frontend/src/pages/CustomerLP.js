/** @format */
import React from "react";
import SlideShow from "../components/ui/SliderService";
import Maid from "../asset/Housekeeping.svg";
import Cook from "../asset/Cook.svg";
import Electric from "../asset/Electric.svg";
import Garden from "../asset/Garden.svg";
import Petcare from "../asset/Petcare.svg";
import Plumber from "../asset/Plumber.svg";
import Trainer from "../asset/Training.svg";
import ProfileCard from "../components/ui/ProfileCard";
import ProviderProfileCard from "../components/ui/ProviderProfileCard";
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
      <section className="services-section px-4 py-8 lg:px-24 lg:py-24 font-poppin space-y-6 ">
        <p className="text-xl md:text-3xl text-[#012A45] font-bold py-3">
          Search from the below categories:
        </p>
        {/* <SlideShow /> */}
        <div className="services flex flex-col md:flex-row  justify-center md:justify-around items-center py-3">
          <div
            title="Electrician"
            className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] my-2 mx-2 flex justify-center items-center bg-[#D9D9D9] rounded-full shadow-lg hover:border hover:border-[#012A45]"
          >
            <img alt="Icons" width="40px" src={Electric} />
          </div>
          <div
            title="Gardener"
            className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] my-2 mx-2 flex justify-center items-center bg-[#D9D9D9] rounded-full shadow-lg hover:border hover:border-[#012A45]"
          >
            <img alt="Icons" width="40px" src={Garden} />
          </div>
          <div
            title="Pet Care"
            className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] my-2 mx-2 flex justify-center items-center bg-[#D9D9D9] rounded-full shadow-lg hover:border hover:border-[#012A45]"
          >
            <img alt="Icons" width="40px" src={Petcare} />
          </div>
          <div
            title="Tutor"
            className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] my-2 mx-2 flex justify-center items-center bg-[#D9D9D9] rounded-full shadow-lg hover:border hover:border-[#012A45]"
          >
            <img alt="Icons" width="40px" src={Trainer} />
          </div>
          <div
            title="Plumber"
            className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] my-2 mx-2 flex justify-center items-center bg-[#D9D9D9] rounded-full shadow-lg hover:border hover:border-[#012A45]"
          >
            <img alt="Icons" width="40px" src={Plumber} />
          </div>
        </div>
      </section>
      <hr />
      {/*******     Trending Providers Section      **********/}
      <section className="trending-section px-4 py-12 lg:px-24 lg:py-24 font-poppin space-y-6 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:w-1/2 text-center md:text-left">
            <p className="text-xl md:text-3xl text-[#012A45] font-bold">
              Trending Providers.
            </p>
            <p className="text-lg text-[#012A45] font-medium my-4">
              Our Top Service Providers.
            </p>
          </div>
          <div className="flex md:w-1/2 items-center">
            <div className="absolute md:-mr-72 md:transform md:rotate-12">
              <ProviderProfileCard
                name={"Saakshi Raut 1"}
                category={"Computer Repairs"}
                description={
                  "I have experience of 3+ years. And I have provided 10+services"
                }
              />
            </div>
            <div className="absolute md:-ml-24 md:transform md:-rotate-12">
              <ProviderProfileCard
                name={"Saakshi Raut 2"}
                category={"Computer Repairs"}
                description={
                  "I have experience of 3+ years. And I have provided 10+services"
                }
              />
            </div>
            {/* Top card */}
            <div className="relative md:z-10">
              <ProviderProfileCard
                name={"Saakshi Raut"}
                category={"Computer Repairs"}
                description={
                  "I have experience of 3+ years. And I have provided 10+services"
                }
              />
            </div>
          </div>
        </div>
      </section>
      {/*******    Happy Customer Section      **********/}
      <section className="customer-section px-4 py-12 lg:px-24 lg:py-24 font-poppin space-y-6 justify-center items-center">
        <p className="text-xl md:text-3xl text-[#012A45] font-bold text-center">
          Happy Customers!
        </p>
        <p className="text-lg text-[#012A45] font-medium text-center">
          Provide your valuable feedback on{" "}
          <span className="text-[#1170B0] underline ">Play Store</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0">
          <div>
            <ProfileCard
              name={"Saakshi Raut"}
              category={"Law Student"}
              description={
                "Really amazing platform. I have been using the site since 3 weeks and it is a great experience."
              }
            />
          </div>
          <div>
            <ProfileCard
              name={"Arfia Shaikh"}
              category={"Computer Architect"}
              description={
                "Really amazing platform. I have been using the site since 3 weeks and it is a great experience."
              }
            />
          </div>
          <div>
            <ProfileCard
              name={"Shrimayee Mishra"}
              category={"Course Directory"}
              description={
                "Really amazing platform. I have been using the site since 3 weeks and it is a great experience."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
