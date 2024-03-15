/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card.js";
function Home() {
  return (
    <>
      <div className="w-full space-x-4">
        <span className="text-3xl font-bold">This is home page</span>

        <Card
          img="Hii"
          name="Name Surname"
          category="Category: Electrician"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text... Read more"
          className="py-3"
        />
      </div>
    </>
  );
}

export default Home;
