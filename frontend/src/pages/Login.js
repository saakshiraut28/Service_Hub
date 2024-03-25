/** @format */

import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const userData = await response.json();
      console.log("User data:", userData);
      const { name } = userData;
      sessionStorage.setItem("username", name);
      console.log("Logged in as:", name);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
      console.error(error);
    }
  };

  return (
    <div className="container px-4 py-8 lg:px-24 font-poppin">
      <div className="flex w-full items-center justify-start my-8">
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
      </div>
      <div className="container flex  justify-center items-center">
        <div className="bg-white border border-[#585858] shadow-lg py-4 px-2 md:px-6 md:py-8">
          <span className="font-bold text-xl text-[#012A45]">
            Welcome to Chakde Chores 🙏.
          </span>
          <form
            className="flex flex-col justify-center items-center py-8 w-full px-4 "
            onSubmit={handleSubmit}
          >
            <input
              className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="md:min-w-[300px] border border-b-[#1170B0] outline-none bg-[#E9E9E9] px-2 py-1 text-sm hover:border-[#1170B0] hover:bg-white my-2"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button title={"Login"} />
            <span className="text-center">
              Don’t have an account?
              <Link to="/signup" className="hover:text-[#1170B0] underline">
                Signup
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
