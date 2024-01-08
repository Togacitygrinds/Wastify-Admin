import Axios from "./Axios";
import { toast } from "react-toastify";

export const createTracker = async (tracking_details, setLoading, callback) => {
  try {
    const { data } = await Axios({
      method: "POST",
      url: `/track/new`,
      data: tracking_details,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      toast.success("Initated a new tracker");
      callback(data);
    } else {
      setLoading(false);
      toast.error(`Failed to create tracker: ${data.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error creating tracker:", error);
    toast.error("Failed to create tracker");
    return {
      success: false,
      message: "Failed to create tracker",
      error,
    };
  }
};

export const updateLiveLocation = async (userId, coordinates) => {
  try {
    const { data } = await Axios({
      method: "POST",
      url: `/track/`,
      data: { userId, coordinates },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(`Failed to update live location: ${data.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error updating live location:", error);
    toast.error("Failed to update live location");
    return {
      success: false,
      message: "Failed to update live location",
      error,
    };
  }
};
