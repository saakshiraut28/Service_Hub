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
      {/*******     Services Section      **********/}
    <section className="services-section px-4 py-8 lg:px-24 lg:py-8 font-poppin space-y-6 ">
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
    </>
  );
}

export default LandingPage;
