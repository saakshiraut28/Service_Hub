/** @format */

import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ui/ServiceCard";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function Services() {
  const [services, setService] = useState();
  const user_id = sessionStorage.getItem("user_id");
  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(`http://localhost:4000/api/service/`);
      const json = await response.json();

      if (response.ok) {
        setService(json);
      }
    };
    fetchServices();
  }, []);
  const handleBook = async (user_id, service_id, provider_id) => {
    try {
      const response = await fetch("/api/book/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id, service_id, provider_id }),
      });

      if (!response.ok) {
        throw new Error("Failed to book service");
      }
    } catch (error) {
      console.error("Error booking service:", error);
      // Handle error
    }
  };
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
              <div className="pl-4 w-5/6 border rounded-xl mx-auto mb-8 border-1-[#A0A0A0] shadow-lg bg-[#e9e9e9] font-poppin hover:bg-[#fff] hover:shadow-md">
                <Link to={`/profile/${service._id}`}>
                  <ServiceCard
                    key={service._id}
                    service={service}
                    className="my-6"
                  />
                </Link>
                <button
                  className="w-[200px] py-1 px-2 text-md font-semibold bg-[#012A45] text-white hover:bg-[#34556C] rounded-full my-4"
                  onClick={() =>
                    handleBook(user_id, service._id, service.provider_id)
                  }
                >
                  Book Now
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Services;
