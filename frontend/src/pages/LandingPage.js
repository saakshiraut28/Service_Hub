/** @format */
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
import Saakshi from "../asset/Saakshi_Raut.png";
import Shrimayee from "../asset/Shrimayee_Mishra.png";
import Arfia from "../asset/Arfia_Shaikh.png";
import Person1 from "../asset/Person1.jpg";
import Person2 from "../asset/Person2.jpg";
import Person3 from "../asset/Person3.jpg";

function LandingPage() {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
      <section className="services-section px-4 py-8 lg:px-24 lg:py-8 font-poppin space-y-6">
        <p className="text-xl md:text-3xl text-[#012A45] font-bold py-3 text-center">
            Search from the below categories:
        </p>
          <div className="ml-28 services-slider relative">
              <Slider ref={slider} {...settings}>
              <div>
                  <div
                  title="Electrician"
                  className="service-icon"
                  >
                  <img alt="Icons" width="40px" src={Electric} />
                  </div>
              </div>
              <div>
                  <div
                  title="Gardener"
                  className="service-icon"
                  >
                  <img alt="Icons" width="40px" src={Garden} />
                  </div>
              </div>
              <div>
                  <div
                  title="Pet Care"
                  className="service-icon"
                  >
                  <img alt="Icons" width="40px" src={Petcare} />
                  </div>
              </div>
              <div>
                  <div
                  title="Tutor"
                  className="service-icon"
                  >
                  <img alt="Icons" width="40px" src={Trainer} />
                  </div>
              </div>
              <div>
                  <div
                  title="Plumber"
                  className="service-icon"
                  >
                  <img alt="Icons" width="40px" src={Plumber} />
                  </div>
              </div>
              </Slider>
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
            <p className="mr-4 text-lg text-justify font-medium lg:text-xl ">
            Hello World!
            Chakde Chores aims to develop a channel between service providers and customers to ensure smooth communication.
            We aim to help increase the outreach of service providers as well as help customers find trustworthy chore helpers.
            Currently, Chakde Chores is a pre-final year project developed using advanced web2 technologies.
            To contact us, fill the below form.
            Thank you!
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
              imgLink={Shrimayee}
            />
            {/* Circle 3 */}
            <TeamCard
              fullName="Arfia Shaikh"
              role="Computer Engineering Student"
              imgLink={Arfia}
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
              imgLink={Saakshi}
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
            img={Person1}
              name={"Arthur Peterson"}
              category={"Law Student"}
              description={
                "Really amazing platform. I have been using the site since 3 weeks and it is a great experience."
              }
            />
          </div>
          <div>
            <ProfileCard
            img={Person2}
              name={"Anamika Deshpande"}
              category={"Computer Architect"}
              description={
                "This website has helped me connect with the best service providers. Grateful to Chakde Chores"
              }
            />
          </div>
          <div>
            <ProfileCard
            img={Person3}
              name={"Aryan Patil"}
              category={"Film Producer"}
              description={
                "This platform has helped me find the best cleaner. Finding someone to clean the set has never been this easy."
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
