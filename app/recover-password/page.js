"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Axios from "axios";
import Link from "next/link";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRecoverPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Call the backend API to initiate password recovery
      const { data } = await Axios.post("/auth/recover-password", { email });

      setLoading(false);
      toast.success(data.message, { position: "top-center" });
      router.push("/");
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.response?.data?.message || "Password recovery failed."
      );
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      {/* Back Button */}
      <Link href={'/login'} className="absolute left-4 top-2 rounded-full  m-4 border py-2 border-2 :hover-[text-] px-3">Go Back</Link>

    
      <form onSubmit={handleRecoverPassword} className="text-center">
        <h2 className="text-2xl font-bold mb-4">Recover Password</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border border-[#E4E4E4] rounded-md w-[70%] my-2 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#358048] text-white rounded-md w-[70%] p-2"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Password Reset Email"}
        </button>
      </form>
    </div>
  );
};

export default RecoverPassword;
