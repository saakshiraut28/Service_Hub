/** @format */

import Button from "./Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ServiceForm({ onClose }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDesc] = useState("");
  const [feedback, setFeed] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const provider_id = sessionStorage.getItem("provider_id");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/service/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          description,
          feedback,
          provider_id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add service");
      }
    } catch (error) {
      setError("Failed to add service");
      console.error(error);
    }
    window.location.reload();
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl p-4 rounded-lg md:min-w-[600px] bg-[#EEEEEE] border px-4">
      <div className="flex justify-between items-center mb-4 font-poppin ">
        <h2 className="text-xl font-bold">Add New Service</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          X
        </button>
      </div>
      <form
        className="flex flex-col justify-center items-center py-8 w-full px-4"
        onSubmit={handleSubmit}
      >
        <input
          className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
          placeholder="Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
          placeholder="Description"
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={description}
        />
        <input
          className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
          placeholder="Category"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
          placeholder="Rating"
          type="text"
          onChange={(e) => setFeed(e.target.value)}
          value={feedback}
        />
        <Button type="submit" title={"Add +"} />
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default ServiceForm;
