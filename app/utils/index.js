import { Axios } from "axios";
import { toast } from "react-toastify";

// Fetch User Data
export const fetchUserData = async (route, callback) => {
  try {
    const { data } = await Axios({
      method: "GET",
      url: `https://wastify-backend.onrender.com/${route}`,
      header: {
        "Content-Type": "application/json",
      },
    });
    callback(data.data);
  } catch (error) {
    console.log(
      error?.response?.data?.message ||
        "This is definitely your fault! Something went wrong."
    );
  }
};

// Fetch Data
export const fetchData = async (route, callback) => {
  try {
    const { data } = await Axios({
      method: "GET",
      url: `https://wastify-backend.onrender.com/${route}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    callback(data.data);
  } catch (error) {
    console.log(
      error?.response?.data?.message || "Ah! kindly check your codebase well..."
    );
  }
};

// Logout
export const UserLogout = async (dispatch) => {
  try {
    const { data } = await Axios({
      url: "auth",
      method: "GET",
    });
    if (data.success) {
      dispatch({
        type: "SET_USER" || "SET_ADMIN",
        user: null,
        admin: null,
      });
      window.location.replace("/");
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(
      error?.response?.data?.message || "Hold on! You can't logout yet."
    );
  }
};
