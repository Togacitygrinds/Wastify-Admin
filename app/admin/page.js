
"use client";

import { useEffect } from "react";
import AdminLayout from "./layout";
import { useStateValue } from "../context/stateProvider";
import { fetchUserData } from "../utils";

const AdminPage = () => {
  const [{}, dispatch] = useStateValue();

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
      fetchUserData('notification', (data) => {
          dispatch({
              type: 'SET_NOTIFICATIONS',
              data
          })
      })
      fetchUserData('payment', (data) => {
          dispatch({
              type: 'SET_PAYMENTS',
              data
          })
      })
      fetchUserData('request', (data) => {
          dispatch({
              type: 'SET_REQUESTS',
              data
          })
      })
      fetchUserData('issue', (data) => {
          dispatch({
              type: 'SET_ISSUES',
              data
          })
      })
      fetchUserData('tracker', (data) => {
          dispatch({
              type: 'SET_TRACKERS',
              data
          })
      })
  
    }, [dispatch]);

  return (
    <>
      <AdminLayout />
    </>
  );
};

export default AdminPage;



