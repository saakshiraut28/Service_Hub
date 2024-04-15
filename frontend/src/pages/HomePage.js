/** @format */
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
import Person1 from "../asset/Person1.jpg";
import Person2 from "../asset/Person2.jpg";
import Person3 from "../asset/Person3.jpg";
import Person4 from "../asset/Person4.jpg";
import Person5 from "../asset/Person5.jpg";


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
      {/*******     Hero Section      **********/}
      <section className="hero-section md:px-10 px-4 py-24 justify-center text-center bg-[#D2EDFA] font-poppin space-y-6 lg:space-y-14 lg:p-20">
        <p className="text-[#012A45] font-black md:text-4xl text-2xl leading-normal lg:text-5xl lg:space-y-3">
          <p className="text-pretty">Get your work done</p>
          <p className="text-pretty m-0">In just few clicks ;)</p>
        </p>
        <div className="text-xl text-[#012A45] font-medium">
          <p>Sending our helpers to your doorsteps.</p>
          <br/>
          <p>Hire someone to do your task.</p>
        </div>
      </section>
      {/*******     Services Section      **********/}
      <section className="services-section px-4 py-8 lg:px-24 lg:py-8 font-poppin space-y-6">
        <p className="text-xl md:text-3xl text-[#012A45] font-bold py-3">
            Search from the below categories:
        </p>
        <button
            className="slider-arrow prev"
            onClick={() => slider.current.slickPrev()}>
            <FaChevronLeft />
        </button>
        <div className="services-slider relative">
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
        <button
            className="slider-arrow next"
            onClick={() => slider.current.slickNext()}
        >
            <FaChevronRight />
        </button>
      </section>
      
      {/*******     Trending Providers Section      **********/}
      <section className="trending-section px-4 py-12 lg:px-12 lg:py-12 font-poppin space-y-6">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col md:w-1/2 text-center md:text-left">
            <p className="text-xl md:text-3xl text-[#012A45] font-bold">
              Trending Providers.
            </p>
            <p className="text-lg text-[#012A45] font-medium my-4">
              Our Top Service Providers.
            </p>
          </div>

          <div className="flex items-center justify-center h-screen">
            {/* Left card tilted to the left */}
            <div className="absolute md:-ml-36 sm:-ml-48 -ml-24 origin-top-left -rotate-12">
              <ProviderProfileCard
                img={Person4}
                name={"Sakhi Gupte"}
                category={"Computer Repairs"}
                description={"I have experience of 4+ years. And I have provided 30+ services"}
              />
            </div>
            {/* Right card tilted to the right */}
            <div className="absolute md:-mr-36 sm:-mr-48 -mr-24 origin-top-right rotate-12">
              <ProviderProfileCard
                img={Person5}
                name={"Aman Mehra"}
                category={"Computer Repairs"}
                description={"I have experience of 5+ years. And I have provided 50+ services"}
              />
            </div>
            {/* Center card straight */}
            <div className="relative mx-auto">
              <ProviderProfileCard
                img={Person5}
                name={"Shanaya Kukreja"}
                category={"Repairing electronics"}
                description={"I have experience of 7+ years of experience in repairing electronics.My expertise helps in extending the life of your electronic products."}
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
    </>
  );
}

export default LandingPage;
