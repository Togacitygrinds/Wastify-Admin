"use client";

import { useState } from "react";
import AuthBgImg from "../../public/AuthImg1.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserSignUp, AdminSignUp } from "../utils/auth";
import { toast } from "react-toastify";
import WastifyLogo from "../../public/wastify.svg";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); // [username] is [email
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [telephone, setTelephone] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formatDateString = (input) => {
    const cleaned = input.replace(/\D/g, "");
    const formatted = cleaned.replace(/(\d{2})(\d{2})(\d{2})/, "$1-$2-$3");
    return formatted;
  };

  const handleDateChange = (e) => {
    const formattedValue = formatDateString(e.target.value);
    setDateOfBirth(formattedValue);
  };
  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Format dateOfBirth to MMDDYY format
    const formattedDateOfBirth = dateOfBirth.replace(/[^0-9]/g, "");

    const userCredentials = {
      name: name,
      email: email,
      username: username,
      password: password,
      date_of_birth: formattedDateOfBirth,
      telephone: telephone,
    };

    AdminSignUp(userCredentials, setLoading, (data) => {
      setLoading(false);
      console.log(data);
      router.push("/signup");
      toast.success("Admin Registration Successful", {
        position: "top-center",
      });

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(data.data));
      }
      const currentPath = window.location.pathname;

      if (currentPath === "/signup") {
        window.location.href = "/login";
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
      {/* Sign-Up Form Section */}
      <form
        action={""}
        className="w-full flex h-[450px] md:h-screen flex-col justify-center items-center sm:py-8 bg-[#fcfcfc] rounded-2xl md:col-span-1"
        onSubmit={signUp}
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
          name="name"
          id="name"
          placeholder="Michael Jones-Smith"
          className="border border-[#E4E4E4] rounded-md w-[70%] my-2 mx-12 p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          className="border border-[#E4E4E4] rounded-md w-[70%] my-2 mx-12 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          name="username"
          id="text"
          placeholder="Enter Username"
          className="border border-[#E4E4E4] rounded-md w-[70%] my-2 mx-12 p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          className="border border-[#E4E4E4] rounded-md w-[70%] my-2 mx-12 p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* New input fields */}
        <input
          type="text"
          name="dateOfBirth"
          id="dateOfBirth"
          placeholder="Date of Birth (MMDDYY)"
          className="border border-[#E4E4E4] rounded-md w-[70%] my-2 mx-12 p-2"
          value={dateOfBirth}
          onChange={handleDateChange}
          required
        />

        <input
          type="text"
          name="telephone"
          id="telephone"
          placeholder="Telephone"
          className="border border-[#E4E4E4] rounded-md w-[70%] my-2 mx-12 p-2"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        />

        <div className="flex items-center justify-end gap-2">
          <Link
            href={"/signup"}
            className="text-[#1D1D1D] text-sm font-semibold  my-4"
          >
            Already have an account?
          </Link>

          <Link
            href="/login"
            className="text-blue-500 text-sm font-semibold  my-4"
          >
            Login
          </Link>
        </div>

        <button
          type="submit"
          className="bg-[#358048] text-white rounded-md  w-[70%] mx-12 p-2"
        >
          {loading ? "Loading..." : "Create account"}
        </button>
      </form>

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
    </div>
  );
};

export default SignUp;
