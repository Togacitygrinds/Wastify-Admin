import Axios from "axios";
import { toast } from "react-toastify";

// Fetch User Data
export const fetchUserData = async (route, callback) => {
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
      url: `http://localhost/8001/${route}`,
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

// Prevent user from accessing the browser console
export const browserController = () => {
  const preventDefaultKeys = [
    "F12",
    "Ctrl+Shift+I",
    "Ctrl+Shift+C",
    "Ctrl+Shift+J",
    "Ctrl+U",
  ];

  const preventKeyCombo = (e) => {
    const key = e.key;
    const isPrevented = preventDefaultKeys.some((combo) => {
      const keys = combo.split("+");
      return keys.every((k) => {
        if (k === "Ctrl") return e.ctrlKey;
        if (k === "Shift") return e.shiftKey;
        return k === key;
      });
    });

    if (isPrevented) {
      e.preventDefault();
      return false;
    }
  };

  // Disable specified key combinations
  document.addEventListener("keydown", preventKeyCombo);

  // Prevent right-click
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
};

// Prompt user from leaving the page without saving changes
export const setupBeforeUnloadListener = async () => {
  // Add an event listener for the beforeunload or onbeforeunload event
  window.addEventListener("beforeunload", handleUnload);
  window.onbeforeunload = handleUnload;

  function handleUnload(event) {
    // Display a custom confirmation dialog
    const confirmationMessage = "Are you sure you want to log out?";

    // Capture the user's choice using the browser's confirmation dialog
    const userChoice = window.confirm(confirmationMessage);

    // If the user chooses to stay, return the custom message
    if (!userChoice) {
      event.returnValue = confirmationMessage;
    }

    // Send a request to the server to notify that the user is logging out intentionally
    if (userChoice) {
      // logout user
      // UserLogout();
    }
  }
};
