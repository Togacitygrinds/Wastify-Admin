"use client"

import { useEffect, useState } from "react";
import { useStateValue } from "../../../app/context/stateProvider";
import { AdminLogin } from "../../utils/auth";
import Image from "next/image"; 
import WastifyLogo from "../../../public/wastify.svg"
import AdminAuth from "./AdminAuth";

const AuthenticateAdmin = ({ children }) => {
  const [{ admin }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const storedAdmin = localStorage.getItem("admin");
        if (storedAdmin) {
          const data = JSON.parse(storedAdmin);
          dispatch({ type: "SET_ADMIN", data });
        }
      } catch (error) {
        console.error("Error checking admin:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="h-screen w-screen flex items-center justify-center overflow-hidden text-3xl bg-[#fcfcfc] font-medium animate-pulse">
          <main className=" flex justify-center items-center h-screen flex-col  ">
              <Image alt="Insurewise" src={WastifyLogo} />
          </main>
        </div>
      ) : (
        <>
          {admin ? (
            // If admin is logged in, render the children
            children
          ) : (
            // If admin is not logged in, render the AdminAuth component
            <AdminAuth />
          )}
        </>
      )}
    </>
  );
};

export default AuthenticateAdmin;
