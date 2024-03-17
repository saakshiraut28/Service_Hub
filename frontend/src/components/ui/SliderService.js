/** @format */

import React from "react";
import Maid from "../../asset/Housekeeping.svg";
import Cook from "../../asset/Cook.svg";
import Electric from "../../asset/Electric.svg";
import Garden from "../../asset/Garden.svg";
import Petcare from "../../asset/Petcare.svg";
import Plumber from "../../asset/Plumber.svg";
import Tutor from "../../asset/Training.svg";

const services = [
  { title: "Maid", icon: Maid },
  { title: "Cook", icon: Cook },
  { title: "Electrician", icon: Electric },
  { title: "Garden", icon: Garden },
  { title: "Pet Care", icon: Petcare },
  { title: "Plumber", icon: Plumber },
  { title: "Tutor", icon: Electric },
];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === services.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {services.map((service, idx) => (
          <div className="slide" key={idx}>
            <img src={service.icon} alt={service.title} />
            <div className="serviceTitle">{service.title}</div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {services.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
