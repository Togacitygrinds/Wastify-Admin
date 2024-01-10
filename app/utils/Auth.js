import { toast } from "react-toastify";
import Axios from "./Axios";
// Create a new user
export const UserSignUp = async (info, setLoading, callback) => {
  try {
    const { data } = await Axios({
      method: "post",
      url: "/auth/signup",
      data: info,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      callback(data);
    } else {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message || "Uh oh! User registration failed."
    );
  }
};

// Login a user
export const UserLogin = async (info, setLoading, callback) => {
  try {
    const { data } = await Axios({
      method: "post",
      url: "/auth/login",
      data: info,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      callback(data);
    } else {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
    toast.error(error?.response?.data?.message || "Uh oh! Login failed.");
  }
};

// Refresh Token
export const RefreshToken = async (callback) => {
  try {
    const { data } = await Axios({
      method: "post",
      url: "/auth/refresh-token",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      callback(data);
    }
  } catch (error) {
    toast.error(
      error?.response?.data?.message || "Uh oh! Session token refresh failed."
    );
  }
};

// Admin Login
export const AdminLogin = async (info, setLoading, callback) => {
  try {
    const { data } = await Axios({
      method: "post",
      url: "/admin/login",
      data: info,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      callback(data);
    } else {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
    toast.error(error?.response?.data?.message || "Uh oh! Login failed.");
  }
};

// Admin Signup
export const AdminSignUp = async (info, setLoading, callback) => {
  try {
    const { data } = await Axios({
      method: "post",
      url: "/admin/register",
      data: info,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      callback(data);
      toast.success("Admin added successfully");
    } else {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message || "Uh oh! Admin sign up failed."
    );
  }
};

// Get Session User
export const GET_SESSION_USER = async (setLoading, callback) => {
  try {
    const { data } = await Axios({
      url: "auth/refresh",
      method: "GET",
    });
    if (data?.success) {
      // console.log("<<<>>>", data)
      console.log("User persists in session.");
      callback(data.data);
    } else {
      toast.warn("Session Expired. Login again!", {
        toastId: "session-error",
      });
      //  window.location.href = '/admin/auth/'
      setLoading(false);
    }
  } catch (e) {
    setLoading(false);
  }
};
