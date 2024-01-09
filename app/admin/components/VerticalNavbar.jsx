"use client";

import { useStateValue } from "../../../app/context/stateProvider";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { fetchUserData } from "../../utils";
import { toast } from "react-toastify";

const VerticalNavbar = ({ onSidebarItemClick, selectedSidebarItem }) => {
  const { pathname } = useRouter();
  const [{ admin }, dispatch] = useStateValue();
  const logout = () => {
    localStorage.removeItem("admin");
    toast.success("Logged out successfully");
    dispatch({
      type: "SET_ADMIN",
      data: null,
    });
  };

  //   Fetch all the needed data
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
    // fetchUserData("user", (data) => {
    //   dispatch({
    //     type: "SET_USER",
    //     data,
    //   });
    // });
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
  }, []);

  return (
    <div className="flex-shrink-0 w-72 bg-white top-0 right-0 border-r-2 ">
      <ul className="py-12 flex flex-col px-6">
        {/* Rounded Admin Initials */}
        <div className="flex justify-center items-center flex-col mb-6">
          <div className="w-16 h-16 cursor-pointer hover:bg-[#075818] rounded-full bg-[#358046] flex justify-center items-center">
            <p className="text-white text-2xl font-bold">
              {admin?.name?.charAt(0)}
            </p>
          </div>
          <div className="flex items-center justify-center hover:text-gray-700 transition-all cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6 -mb-2 mr-1 text-gray-500 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            <p className="font-medium mt-2 text-gray-500 text-sm w-max flex  ">
              {admin?.username}
            </p>
          </div>
        </div>

        <Link
          href="/admin"
          onClick={() => onSidebarItemClick("Dashboard")}
          className={`${
            pathname === "/admin" ? "bg-[#358046] rounded-md " : ""
          } px-4 text mb-4 py-2 text-white-100 flex gap-2 transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7m-2-5l-7 7-7-7"
            />
          </svg>
          <p>Dashboard</p>
        </Link>

        <Link
          href={"/admin/users"}
          onClick={() => onSidebarItemClick("View Users")}
          className={`${
            pathname == "/admin/users" ? "bg-[#358046] rounded-md " : null
          } px-4 text mb-4 py-2 text-white-100 flex gap-2 transition-all`}
        >
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
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>

          <p>Scout Users</p>
        </Link>

        <Link
          href={"/admin/payment"}
          onClick={() => onSidebarItemClick("Payment History")}
          className={`${
            pathname == "/admin/payment" ? "bg-[#358046] rounded-md " : null
          } px-4 text mb-4 py-2 text-white-100 flex gap-2 transition-all`}
        >
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
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>

          <p>All Payments</p>
        </Link>

        <Link
          href={"/admin/estafettes"}
          onClick={() => onSidebarItemClick("View Estafettes")}
          className={`${
            pathname == "/admin/estafettes" ? "bg-[#358046] rounded-md " : null
          } px-4 text mb-4 py-2 text-white-100 flex gap-2 transition-all`}
        >
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
              d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>

          <p>View Estafettes</p>
        </Link>

        <Link
          href={"/admin/new-company"}
          onClick={() => onSidebarItemClick("Create Company")}
          className={`${
            pathname == "/admin/new-company" ? "bg-[#358046] rounded-md " : null
          } px-4 text mb-4 py-2 text-white-100 flex gap-2 transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <p>Create Company</p>
        </Link>

        <Link
          href={"/admin/issues"}
          onClick={() => onSidebarItemClick("Reported Issues")}
          className={`${
            pathname == "/admin/issues" ? "bg-[#358046] rounded-md " : null
          } px-4 text mb-4 py-2 text-white-100 flex gap-2 transition-all`}
        >
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
              d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
            />
          </svg>

          <p>Reported Issues</p>
        </Link>
        <Link
          href={"/admin/track"}
          onClick={() => onSidebarItemClick("Tracker")}
          className={`${
            pathname == "/admin/track" ? "bg-[#358046] rounded-md " : null
          } px-4 text mb-4 py-2 text-white-100 flex gap-2 transition-all`}
        >
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
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
            />
          </svg>

          <p>Track Driver</p>
        </Link>

        <Link
          href={"/admin/companies"}
          onClick={() => onSidebarItemClick("View Companies")}
          className={`${
            pathname == "/admin/companies" ? "bg-[#358046] rounded-md " : null
          } px-4 text mb-4 py-2 text-white-100 flex gap-2 transition-all`}
        >
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
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
            />
          </svg>

          <p>View Companies</p>
        </Link>

        <Link
          href={"/admin/new-estafette"}
          onClick={() => onSidebarItemClick("Add Estafette")}
          className={`${
            pathname == "/admin/new-estafette"
              ? "bg-[#358046] rounded-md "
              : null
          } px-4 text mb-4 py-2 text-white-100 flex gap-2 transition-all`}
        >
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
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>

          <p>Add an Estafette</p>
        </Link>
        <Link
          href={"/admin/add-admin"}
          onClick={() => onSidebarItemClick("Add Admin")}
          className={`${
            pathname == "/admin/add-admin" ? "bg-[#358046] rounded-md " : null
          } px-4 text mb-4 py-2 text-white-100 flex gap-2 transition-all`}
        >
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
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>

          <p>Create new Admin</p>
        </Link>

        <button
          onClick={logout}
          className="px-4 py-2 hover:indent-0.5 bg-[#358046] text-white rounded-lg flex gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          <p>Logout</p>
        </button>
      </ul>
    </div>
  );
};

export default VerticalNavbar;
