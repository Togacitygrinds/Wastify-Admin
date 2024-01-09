"use client";
import WastifyLogo from "../../../public/wastify.svg";
import Image from "next/image";
import { useStateValue } from "../../context/stateProvider";
import { toast } from "react-toastify";
import { fetchUserData } from "../../utils/";
import { fetchCompanies } from "../../utils/Company";
import { useEffect } from "react";

const AdminHeader = () => {
  const [{ admin }, dispatch] = useStateValue();

  const logout = () => {
    localStorage.removeItem("admin");
    toast.success("Logged out successfully");
    dispatch({
      type: "SET_ADMIN",
      data: null,
    });
  };

  // Fetch the company data
  fetchCompanies((data) => {
    console.log(data);
  });

  useEffect(() => {
    fetchUserData("company", (data) => {
      dispatch({
        type: "SET_COMPANIES",
        data,
      });
    });
    fetchUserData("estafette", (data) => {
      dispatch({
        type: "SET_ESTAFETTES",
        data,
      });
    });
    fetchUserData("user", (data) => {
      dispatch({
        type: "SET_USER",
        data,
      });
    });
    fetchUserData("notification", (data) => {
      dispatch({
        type: "SET_NOTIFICATIONS",
        data,
      });
    });
    fetchUserData("payment", (data) => {
      dispatch({
        type: "SET_PAYMENTS",
        data,
      });
    });

    fetchUserData("report-issue", (data) => {
      dispatch({
        type: "SET_ISSUES",
        data,
      });
    });
    fetchUserData("tracker", (data) => {
      dispatch({
        type: "SET_TRACKERS",
        data,
      });
    });
  }, [dispatch]);

  return (
    <div className="py-4">
      <header className="flex bg-[#fcfcfc] bg-opacity-50 backdrop-filter backdrop-blur-lg fixed w-full  z-[100] left-0 right-0 justify-between p-4 -my-4">
        <a href="" className="flex items-center gap-1 px-6">
          {/* Logo Heroicon */}
          <Image
            src={WastifyLogo}
            width={150}
            height={50}
            alt="Logo"
            className=""
          />
        </a>

        <div className="flex gap-8 px-28 items-center">
          {/*Header Navigation  */}
          <div className="flex gap-4 items-center ">
            <button className="bg-zinc-300/10 h-[40px] w-[40px] flex justify-center items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>
            <button
              onClick={logout}
              className="bg-transparent flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg"
            >
              <div className="h-[40px] font-bold uppercase flex items-center justify-center text-white  rounded-full bg-[#358048] w-[40px] ">
                {admin?.username[0]}
              </div>
              <div className="flex flex-col">
                <p className="font-medium  text-sm w-max">{admin?.username}</p>
                <p className="text-xs text-gray-500 w-max">Logout</p>
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AdminHeader;
