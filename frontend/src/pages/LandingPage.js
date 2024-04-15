/** @format */
import React from "react";
import ButtonLight from "../components/ui/ButtonLight.js";
import ButtonDark from "../components/ui/ButtonDark.js";
import TeamCard from "../components/ui/TeamCard.js";
import ContactCard from "../components/ui/ContactCard.js";
import Electric from "../asset/Electric.svg";
import Garden from "../asset/Garden.svg";
import Petcare from "../asset/Petcare.svg";
import Plumber from "../asset/Plumber.svg";
import Trainer from "../asset/Training.svg";
import ProfileCard from "../components/ui/ProfileCard.js";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      {/*******     Entry Section      **********/}
      <section className="hero-section md:px-10 px-4 py-24 justify-center text-center bg-[#D2EDFA] font-poppin space-y-6 lg:space-y-14 lg:p-20">
        <p className="text-[#012A45] font-black md:text-4xl text-2xl leading-normal lg:text-5xl lg:space-y-3">
          <p className="text-pretty">Need help with your daily</p>
          <p className="text-pretty m-0">or occasional chores?</p>
        </p>
        <p className="text-lg text-[#012A45] font-medium lg:text-xl">
          We are here for you.
        </p>

        <div className="flex flex-col items-center space-y-6 xl:flex md:flex-row md:space-y-0 md:space-x-12 md:justify-center">
          <Link to="/login">
            <ButtonLight title="Join Community" />
          </Link>
          <Link to="/signup">
            <ButtonLight title="Find Provider" />
          </Link>
        </div>
      </section>
      <hr />

      {/*******     Services Section      **********/}
      <section className="services-section px-4 py-8 lg:px-24 lg:py-8 font-poppin space-y-6 ">
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
      <hr className="m-auto w-[200px] " />

      {/*******     About Section      **********/}
      <section className="flex flex-col font-poppin text-[#012A45] px-4 py-8 lg:px-24 lg:py-8 items-center lg:flex-row py-8">
        {/* Left Half */}
        <div className="lg:w-[49%] flex flex-col ml-4">
          <div className="about-para pl-2 lg:ml-4">
            <p className="pt-6 pb-4 text-xl md:text-3xl text-[#012A45] font-bold py-4">
              About Us
            </p>
            <p className="mr-4 text-lg font-medium lg:text-xl ">
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
        <div className="lg:w-1/2 pt-8 pb-8 flex justify-center items-center">
          <div
            className="p-4 pt-8 flex flex-col space-y-24 md:flex md:flex-row md:space-y-0 md:p-0 md:space-x-8
          lg:flex-col lg:space-y-20"
          >
            {/* Circle 1 */}
            <TeamCard
              fullName="Shrimayee Mishra"
              role="Computer Engineering Student"
              imgLink="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
            />
            {/* Circle 3 */}
            <TeamCard
              fullName="Arfia Shaikh"
              role="Computer Engineering Student"
              imgLink="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
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
              imgLink="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
            />
          </div>
        </div>
      </section>
      <hr className="m-auto w-[200px] " />

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
                  img={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"}
                    name={"Saakshi Raut"}
                    category={"Law Student"}
                    description={
                      "Really amazing platform. I have been using the site since 3 weeks and it is a great experience."
                    }
                  />
                </div>
                <div>
                  <ProfileCard
                  img={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"}
                    name={"Arfia Shaikh"}
                    category={"Computer Architect"}
                    description={
                      "Really amazing platform. I have been using the site since 3 weeks and it is a great experience."
                    }
                  />
                </div>
                <div>
                  <ProfileCard
                  img={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"}
                    name={"Shrimayee Mishra"}
                    category={"Film Producer"}
                    description={
                      "Really amazing platform. I have been using the site since 3 weeks and it is a great experience."
                    }
                  />
                </div>
              </div>
            </section>

      {/*******     Contact Section      **********/}
      <section className="contact font-poppin text-[#012A45] bg-[#D2EDFA] px-4 py-8 lg:px-24 lg:py-8">
        <p className="text-xl md:text-3xl text-[#012A45] font-bold text-left py-4">
          Contact Us:
        </p>
        <div className="flex flex-col items-center lg:flex-row">
          <ContactCard />

          <div className="form text-base font-medium lg:ml-4 lg:pl-4 lg:text-lg lg:font-semibold">
            <div className="firstRow flex flex-col md:flex-row md:space-x-20 lg:space-x-10">
              <div className="pt-5 firstName">
                <p className="pl-0">First Name: </p>
                <input
                  className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#fff] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
                  placeholder="Enter your name"
                  type="email"
                />
              </div>

              <div className="pt-5 lastName">
                <p className="pl-0">Last Name: </p>
                <input
                  className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#fff] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
                  placeholder="Enter your surname"
                  type="email"
                />
              </div>
            </div>

            <div className="secondRow flex flex-col md:flex-row md:space-x-20 lg:space-x-10">
              <div className="pt-5 email">
                <p className="pl-0">Email: </p>
                <input
                  className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#fff] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>

              <div className="pt-5 phoneNumber">
                <p className="pl-0">Phone Number: </p>
                <input
                  className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#fff] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
                  placeholder="Enter your phone number"
                  type="email"
                />
              </div>
            </div>

            <div className="pt-5 thirdRow message">
              <p className="pl-0">Message: </p>
              <input
                className="md:min-w-full border border-b-[#1170B0] outline-none bg-[#fff] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
                placeholder="Type the message. Let us know your opinion ;)"
                type="email"
              />
            </div>

            <div className="m-8 md:my-4 md:mx-0">
              <ButtonDark title="Thanks" />
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default LandingPage;
