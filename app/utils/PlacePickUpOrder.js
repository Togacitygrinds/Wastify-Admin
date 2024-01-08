import Axios from "./Axios";
import { toast } from "react-toastify";

export const placePickUpOrder = async (
  pickup_details,
  setLoading,
  callback
) => {
  try {
    const { data } = await Axios({
      method: "POST",
      url: `/request-service/`,
      data: pickup_details,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      toast.success(data.message);
      setLoading(false);
      callback(data);
    } else {
      setLoading(false);
      toast.error(`Failed to place order: ${data.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error placing order:", error);
    toast.error("Failed to place order");
    setLoading(false);
    return {
      success: false,
      message: "Failed to place order",
      error,
    };
  }
};
