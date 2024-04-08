/** @format */

import React, { useEffect, useState } from "react";

function EditServiceForm({ id, onClose }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDesc] = useState("");
  const [feedback, setFeed] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/service/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch service details");
        }
        const data = await response.json();
        const service = data.service; // Assuming the service object is returned as 'service'
        setTitle(service.title);
        setCategory(service.category);
        setDesc(service.description);
        setFeed(service.feedback);
      } catch (error) {
        setError("Failed to fetch service details");
        console.error(error);
      }
    };

    fetchServiceDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/service/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          description,
          feedback,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update service");
      }

      onClose(); // Close the edit form after successful update
    } catch (error) {
      setError("Failed to update service");
      console.error(error);
    }
    window.location.reload();
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl p-4 rounded-lg md:min-w-[600px] bg-[#EEEEEE] border px-4">
      <div className="flex justify-between items-center mb-4 font-poppin ">
        <h2 className="text-xl font-bold">Edit Service</h2>
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
          placeholder="Category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
          placeholder="Rating"
          type="text"
          value={feedback}
          onChange={(e) => setFeed(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default EditServiceForm;
