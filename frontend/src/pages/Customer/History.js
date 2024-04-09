/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/ui/ServiceCard";

function UserHistory() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const user_id = sessionStorage.getItem("user_id"); // Corrected sessionStorage usage

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/book/user/${user_id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const json = await response.json();
        setServices(json);
      } catch (error) {
        setError("Failed to fetch services");
        console.error(error);
      }
    };
    fetchServices();
  }, [user_id]); // Added user_id to dependency array

  return (
    <>
      {services &&
        services.map((service) => (
          <div
            key={service._id}
            className="pl-4 w-5/6 border rounded-xl mx-auto mb-8 border-1-[#A0A0A0] shadow-lg bg-[#e9e9e9] font-poppin hover:bg-[#fff] hover:shadow-md"
          >
            <Link to={`/profile/${service._id}`}>
              <ServiceCard service={service} className="my-6" />
            </Link>
          </div>
        ))}
      {error && <p>{error}</p>}
    </>
  );
}

export default UserHistory;
