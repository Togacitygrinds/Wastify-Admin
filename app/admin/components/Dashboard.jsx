"use client";

import { useStateValue } from "../../context/stateProvider";
import { useEffect } from "react";
import { fetchUserData } from "../../utils";

const Dashboard = () => {
  const [
    { companies, estafettes, payments, issues, user, requests },
    dispatch,
  ] = useStateValue();

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
  }, [dispatch]);

  return (
    <div className="my-8 rounded-lg min-w-[1200px]  flex gap-4 flex-col overflow-x-hidden overflow-y-auto bg-white h-[85%] p-8 ">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4 w-full ">
        <article className="w-full items-center bg-[#63B76C] bg-opacity-2 text-white py-4 rounded-lg flex flex-col">
          <h1 className="text-5xl">{user?.length | 0}</h1>
          <p>Users</p>
        </article>
        <article className="w-full items-center bg-[#63B76C] bg-opacity-2 text-white py-4 rounded-lg flex flex-col">
          <h1 className="text-5xl">{companies?.length | 0}</h1>
          <p>Companies</p>
        </article>
        <article className="w-full items-center bg-[#63B76C] bg-opacity-2 text-white py-4 rounded-lg flex flex-col">
          <h1 className="text-5xl">{estafettes?.length || 0}</h1>
          <p>Drivers</p>
        </article>
        <article className="w-full items-center bg-[#63B76C] bg-opacity-2 text-white py-4 rounded-lg flex flex-col">
          <h1 className="text-5xl">{issues?.length || 0}</h1>
          <p>Issues Reported</p>
        </article>
      </div>
      <div className="flex">
        <h1 className="text-2xl font-bold">Recent Pick Up Requests</h1>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
