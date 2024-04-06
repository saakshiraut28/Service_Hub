/** @format */

import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/spuser/login/", {
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
      const { _id } = userData;
      sessionStorage.setItem("provider_id", _id);
      console.log("Logged in as:", _id);
      navigate("/home");
      window.location.reload();
    } catch (error) {
      setError("Invalid email or password");
      console.error(error);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center py-8 w-full px-4"
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
    </form>
  );
}

export default LoginForm;
