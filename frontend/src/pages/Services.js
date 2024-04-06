/** @format */

import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ui/ServiceCard";
import { Link } from "react-router-dom";

function Services() {
  const [services, setService] = useState();
  useEffect(() => {
    const fetchProviders = async () => {
      const response = await fetch(`http://localhost:4000/api/service/`);
      const json = await response.json();

      if (response.ok) {
        setService(json);
      }
    };
    fetchProviders();
  }, []);
  return (
    <>
      <div className="container px-4 lg:px-24 py-10 font-poppin">
        <div className="flex w-full items-center justify-start">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Link>
        </div>
        <p className="title font-bold text-3xl text-[#033556] py-4 text-center">
          Get the Latest Services! 👨‍🔧
        </p>
        <div className="py-3 w-full">
          {services &&
            services.map((service) => (
              <div>
                <Link to={`/profile/${service._id}`}>
                  <ServiceCard
                    key={service._id}
                    service={service}
                    className="my-6"
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Services;
