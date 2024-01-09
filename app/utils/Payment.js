import Axios from "./Axios";
import { toast } from "react-toastify";

export const createPayment = async (payment_details, setLoading, callback) => {
  try {
    const { data } = await Axios({
      method: "POST",
      url: `/payment/create`,
      data: payment_details,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      toast.success(data.message);
      callback(data);
      setLoading(false);
    } else {
      toast.error(`Failed to create payment: ${data.message}`);
      setLoading(false);
    }

    return data;
  } catch (error) {
    console.error("Error creating payment:", error);
    toast.error("Failed to create payment");
    setLoading(false);
    return {
      success: false,
      message: "Failed to create payment",
      error,
    };
  }
};

export const getPayments = async () => {
  try {
    const { data } = await Axios({
      method: "GET",
      url: `/payment/`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      toast.success("Payments fetched successfully");
      return data;
    } else {
      toast.error(`Failed to fetch payments: ${data.message}`);
      return {
        success: false,
        message: "Failed to fetch payments",
      };
    }
  } catch (error) {
    console.error("Error fetching payments:", error);
    toast.error("Failed to fetch payments");
    return {
      success: false,
      message: "Failed to fetch payments",
      error,
    };
  }
};

export const getPaymentById = async (id) => {
  try {
    const { data } = await Axios({
      method: "GET",
      url: `/payment/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      toast.success("Yay! Payment fetched successfully");
      return data;
    } else {
      toast.error(`Failed to fetch payment: ${data.message}`);
      return {
        success: false,
        message: "Uh oh! Failed to fetch payment",
      };
    }
  } catch (error) {
    console.error("Error fetching payment:", error);
    toast.error("Failed to fetch payment");
    return {
      success: false,
      message: "Failed to fetch payment",
      error,
    };
  }
};

export const updatePaymentById = async (
  payment_details,
  setLoading,
  callback
) => {
  try {
    const { data } = await Axios({
      method: "PUT",
      url: `/payment/update/${id}`,
      data: payment_details,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      callback(data);
      toast.success(data.message);
    } else {
      toast.error(`Failed to update payment: ${data.message}`);
      setLoading(false);
    }

    return data;
  } catch (error) {
    console.error("Error updating payment:", error);
    toast.error("Failed to update payment");
    setLoading(false);
    return {
      success: false,
      message: "Failed to update payment",
      error,
    };
  }
};

export const deletePaymentById = async (id, setLoading) => {
  setLoading(true);
  try {
    const { data } = await Axios({
      method: "DELETE",
      url: `${API_BASE_URL}/payment/delete/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      setLoading(true);
      toast.success(data.message);
    } else {
      setLoading(false);
      toast.error(`Failed to delete payment: ${data.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error deleting payment:", error);
    toast.error("Failed to delete payment");
    setLoading(false);
    return {
      success: false,
      message: "Failed to delete payment",
      error,
    };
  }
};
