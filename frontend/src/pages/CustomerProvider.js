/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CustomerProviderProfile() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/spuser/profile/${id}`
        );
        if (response.ok) {
          const json = await response.json();
          setProvider(json);
        } else {
          throw new Error("Failed to fetch provider");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProvider();
  }, [id]); // Fetch provider data whenever the ID parameter changes

  if (!provider) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container px-4 py-1 lg:px-24 lg:py-4">
        <div className="flex w-full items-center justify-start py-4">
          <Link to="/servicepage">
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
        <div className="w-full border border-1-[#A0A0A0] shadow-xl bg-[#fff] font-poppin px-4 lg:px-8 py-10 my-3">
          <div className="flex flex-col md:flex-row items-center md:px-6 px-3 justify-center md:justify-start py-3">
            <div className="flex w-sm">Image</div>
            <div className="justify-around px-4 space-y-3">
              <p className="text-[#012A45] font-bold text-xl">
                {provider.name} | {provider.title}
              </p>
              <p className="w-fit text-white font-medium text-sm bg-[#1170B0] px-4 rounded-full py-1 ">
                {provider.category}
              </p>
              <p className="text-md py-4 text-justify">
                {provider.bio}
                <span className="font-bold hover:underline">Read more</span>
              </p>
              <div className="flex text-bold justify-center items-center md:justify-start space-x-6">
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
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                  />
                </svg>

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
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>

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
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row w-full py-5 justify-center items-center">
            <div className="flex flex-col md:w-1/2 justify-center items-center py-4">
              <p className="font-bold text-5xl">
                <span className="text-9xl">3</span>/4
              </p>
              <p className="font-medium text-lg">20+ services provided.</p>
            </div>
            <div className="md:w-1/2 px-2">
              <p className="text-[#012A45] font-bold text-xl">Service Name</p>
              <p className="text-md py-4 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text...
                <span className="font-bold hover:underline">Read more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerProviderProfile;
