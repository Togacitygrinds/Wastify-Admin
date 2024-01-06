"use client";

import { useState } from "react";
import AuthBgImg from "../../public/assets/auth-bg-2.jpg";
import Image from "next/image";
import Link from "next/link";
import { useStateValue } from "../context/stateProvider";
import { UserLogin, AdminLogin } from "../utils/auth";
import { toast } from "react-toastify";
import InsurewiseLogo from "../../public/assets/image 1insurewise-logo.svg";



const LoginPage = () => {
  // States for User Inputs
  const [username, setUserName] = useState("");
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
    }
    AdminLogin(userCredentials, setLoading, (data) => {
      setUserName("");
      setPassword("");
      setLoading(false);
      dispatch({
        type: "SET_ADMIN",
        data: data.data,
      })

      // Preview if data success
      console.log(data);
      toast.success("Login Successfull", {
        position: "top-center",
      })

      if (typeof window !== "undefined") {
        localStorage.setItem("admin", JSON.stringify(data.data));
      }

      // Get the curret path
      const currentPath = window.location.pathname;

      // Redirect if current path is login page
      if (currentPath === "/login") {
        window.location.href = "/admin";
      } else {
        window.location.reload();
      }

    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* Login Section */}
      <div className="flex flex-col flex-wrap-reverse h-[300px] md:gap-6 md:min-h-screen  max-w-7xl mx-auto w-full justify-around justify-center ">
        {/* Image Section  */}
        <Image
          src={AuthBgImg}
          width={2500}
          height={1}
          alt="Login Background Image"
          className="object-cover object-left-top left-0 top-0  md:object-center  md:h-screen"
        />
      </div>

      {/* Login Form  */}
      <form
        className="w-full flex h-[450px] md:h-screen flex-col justify-center items-center sm:py-8 bg-[#fcfcfc] rounded-2xl  "
        onSubmit={login}
      >
        {/* Logo */}
        <div className=" md:block">
          <Image
            src={InsurewiseLogo}
            width={200}
            height={80}
            alt="Insurewise Company Logo"
          ></Image>
        </div>

        {/* Input fields */}

        {/* <label htmlFor="username" className="text-[#1D1D1D] text-sm font-semibold">Email</label> */}
        <input
          type="username"
          name="username"
          id="username"
          placeholder="Enter your username"
          className="border border-[#E4E4E4] rounded-md w-[70%] my-4 mx-12 p-2"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
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
            href={"/forget-password"}
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
          className="bg-[#1D1D1D] text-white  w-[70%] mx-12 p-2"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
