"use client";

import { useState } from "react";
import AuthBgImg from "../../public/AuthImg3.jpg";
import Image from "next/image";
import Link from "next/link";
import { useStateValue } from "../context/stateProvider";
import { AdminLogin } from "../utils/auth";
import { toast } from "react-toastify";
import WastifyLogo from "../../public/wastify.svg";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [{ admin }, dispatch] = useStateValue();

  // User Login Functionality
  const login = (event) => {
    event.preventDefault();
    setLoading(true);
    const userCredentials = {
      username: username,
      password: password,
    };
    AdminLogin(userCredentials, setLoading, (data) => {
      setUsername("");
      setPassword("");
      setLoading(false);
      dispatch({
        type: "SET_ADMIN",
        data: data.data,
      });

      console.log(data);
      toast.success("Login Successfull", {
        position: "top-center",
      });

      if (typeof window !== "undefined") {
        localStorage.setItem("admin", JSON.stringify(data.data));
      }

      // Get the current path
      const currentPath = window.location.pathname;

      // Redirect if the current path is the login page
      if (currentPath === "/login") {
        window.location.href = "/admin";
      } else {
        window.location.reload();
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
      {/* Image Section (takes up remaining 2 columns) */}
      <div className="flex flex-col flex-wrap-reverse h-[300px] md:gap-6 md:min-h-screen max-w-7xl mx-auto w-full justify-around justify-center md:col-span-2">
        {/* Image Section */}
        <Image
          src={AuthBgImg}
          width={2500}
          height={1}
          alt="Login Background Image"
          className="object-cover object-left-top left-0 top-0 md:object-center md:h-screen"
        />
      </div>
      {/* Login Section */}
      {/* Login Form  */}
      <form
        className="w-full flex h-[450px] md:h-screen flex-col justify-center items-center sm:py-8 bg-[#fcfcfc] rounded-2xl md:col-span-1"
        onSubmit={login}
      >
        {/* Logo */}
        <div className="md:block">
          <Image
            src={WastifyLogo}
            width={200}
            height={80}
            alt="Insurewise Company Logo"
          ></Image>
        </div>

        {/* Input fields */}
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter username"
          className="border border-[#E4E4E4] rounded-md w-[70%] my-4 mx-12 p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          className="border border-[#E4E4E4] rounded-md w-[70%] mx-12 p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Forget Password  */}
        <div className="flex items-center justify-end gap-2">
          <Link
            href={"/recover-password"}
            className="text-[#1D1D1D] text-sm font-semibold underline my-4"
          >
            Forget Password?
          </Link>

          <Link
            href="/signup"
            className="text-blue-500 text-sm font-semibold  my-4"
          >
            Create Account
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#358048] rounded-lg text-white  w-[70%] mx-12 p-2"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
