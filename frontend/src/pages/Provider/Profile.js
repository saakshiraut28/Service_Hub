/** @format */
/** @format */

import { useState, useEffect } from "react";
import ButtonLight from "../../components/ui/ButtonLight.js";

export default function ProviderProfileComponent() {
  const [provider, setProvider] = useState(""); // Initialize user state to null
  const _id = sessionStorage.getItem("provider_id");

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const response = await fetch(`/api/spuser/profile/${_id}`);
        if (response.ok) {
          const providerData = await response.json();
          setProvider(providerData); // Set user data to the state
        } else {
          throw new Error("Failed to fetch provider data");
        }
      } catch (error) {
        console.error("Error fetching provider data:", error);
      }
    };
    fetchProvider();
  }, [_id]); // Add _id to dependency array to re-fetch when it changes

  return (
    <div className="container w-full font-poppin">
      <div className="profile flex flex-col justify-center  h-[200px] text-white px-4 lg:px-24 py-4 bg-[#012A45]">
        <p className="font-bold text-2xl">Personal Details.</p>
        <p className="font-regular text-lg">
          A good profile makes lasting impression.
        </p>
      </div>
      <div className="flex flex-col bg-white px-4 lg:px-24 py-4 ">
        <p className="font-semibold text-xl">Check your profile details:</p>
        <div className="flex flex-col mt-12 mb-12 md:flex-row">
          <div className="image md:w-1/3 place-self-center lg:w-1/5">
            <div className="photo my-4 w-32 h-32 bg-[#e9e9e9] rounded-full md:h-40 md:w-40 md:mx-8 lg:h-48 lg:w-48 lg:ml-12 xl:ml-20 xl:w-52 xl:h-52"></div>
          </div>
          <div className="text md:w-2/3 lg:w-4/5 lg:pl-16 lg:pr-16">
            <div className="heading name text-lg font-regular text-center md:text-justify md:pt-8">
              <span className="font-bold">Name: </span>{provider.name}
            </div>
            <div className="city text-center md:text-justify md:text-lg xl:pb-4">
              <span className="font-bold">Contact Details: </span>{provider.email} | {provider.contact}
              <br />
              <span className="font-bold">Bio:  </span>{provider.bio}
              <br />
              <span className="font-bold">Category:  </span>{provider.category}
              <br />
              <span className="font-bold">Address: </span>{provider.address}
            </div>
            <ButtonLight title="Edit Details" />
          </div>
        </div>
      </div>
    </div>
  );
}
