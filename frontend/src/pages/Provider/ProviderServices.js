/** @format */

import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ui/ServiceCard";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import ServiceForm from "../../components/ui/ServiceForm";
import EditServiceForm from "../../components/ui/EditServiceForm";

function ProviderServices() {
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editServiceId, setEditServiceId] = useState();
  const provider_id = sessionStorage.getItem("provider_id");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`/api/service/sp/${provider_id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const json = await response.json();
        setServices(json);
      } catch (error) {
        console.error(error);
        // Handle error here, e.g., display a message to the user
      }
    };
    fetchServices();
  }, [provider_id]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/service/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete service");
      }
      window.location.reload();
      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const handleEdit = (id) => {
    setEditServiceId(id); // Set the ID of the service being edited
    setIsEditOpen(true); // Open the edit form
  };
  const handleClose = () => {
    setIsOpen(false);
    setIsEditOpen(false);
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Link>
        </div>
        <p className="title font-bold text-3xl text-[#033556] py-4 text-center">
          My Services! 👨‍🔧
        </p>
        <div className="py-3 w-full">
          <button
            className="w-[200px] py-1 px-2 text-md font-semibold bg-[#012A45] text-white hover:bg-[#34556C] rounded-full my-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            Add Service +
          </button>
          {isOpen && <ServiceForm onClose={handleClose} />}
          {services.map((service) => (
            <div
              key={service._id}
              className="pl-4 w-5/6 border rounded-xl mx-auto mb-8 border-1-[#A0A0A0] shadow-lg bg-[#e9e9e9] font-poppin hover:bg-[#fff] hover:shadow-md"
            >
              <Link to={`/profile/${service._id}`}>
                <ServiceCard
                  key={service._id}
                  service={service}
                  className="my-6"
                />
              </Link>
              <button
                className="py-2 px-2 text-md font-semibold text-black hover:bg-[#34556C] hover:text-white rounded-full my-4 mx-2"
                onClick={() => handleEdit(service._id)}
              >
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
              {isEditOpen &&
                service._id === editServiceId && ( // Only render the edit form for the selected service
                  <EditServiceForm id={service._id} onClose={handleClose} />
                )}

              <button
                className=" py-2 px-2 text-md font-semibold  text-black hover:bg-[#ff4545] hover:text-white rounded-full my-4"
                onClick={() => handleDelete(service._id)}
              >
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProviderServices;
