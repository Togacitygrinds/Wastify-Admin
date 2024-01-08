import Axios from "./Axios";
import { toast } from "react-toastify";

export const createNotification = async (
  notification_details,
  setLoading,
  callback
) => {
  try {
    const { data } = await Axios({
      method: "POST",
      url: `/notification/create`,
      data: notification_details,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      toast.success(data.message);
      callback(data);
    } else {
      toast.error(`Failed to create notification: ${data.message}`);
      setLoading(false);
    }

    return data;
  } catch (error) {
    console.error("Error creating notification:", error);
    toast.error("Failed to create notification");
    setLoading(false);
    return {
      success: false,
      message: "Uh oh! We couldn't notify everyone.",
      error,
    };
  }
};

export const getNotifications = async () => {
  try {
    const { data } = await Axios({
      method: "GET",
      url: `/notification/all`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      return data;
    } else {
      toast.error(`Failed to fetch notifications: ${data.message}`);
      return {
        success: false,
        message: "Failed to fetch notifications",
      };
    }
  } catch (error) {
    console.error("Error fetching notifications:", error);
    toast.error("Failed to fetch notifications");
    return {
      success: false,
      message: "Failed to fetch notifications",
      error,
    };
  }
};

export const getNotificationById = async (id, setLoading) => {
  setLoading(true);
  try {
    const { data } = await Axios({
      method: "GET",
      url: `/notification/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      setLoading(false);
      return data;
    } else {
      toast.error(`Failed to fetch notification: ${data.message}`);
      setLoading(false);
      return {
        success: false,
        message: "Failed to fetch notification",
      };
    }
  } catch (error) {
    console.error("Error fetching notification:", error);
    toast.error("Failed to fetch notification");
    return {
      success: false,
      message: "Failed to fetch notification",
      error,
    };
  }
};

export const updateNotificationById = async (
  notification_details,
  setLoading,
  callback
) => {
  try {
    const { data } = await Axios({
      method: "PUT",
      url: `/notification/update/${id}`,
      data: notification_details,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      callback(data);
      toast.success(data.message);
    } else {
      setLoading(false);
      toast.error(`Failed to update notification: ${data.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error updating notification:", error);
    toast.error("Failed to update notification");
    setLoading(false);
    return {
      success: false,
      message: "Failed to update notification",
      error,
    };
  }
};

export const deleteNotificationById = async (id, setLoading) => {
  setLoading(true);
  try {
    const { data } = await Axios({
      method: "DELETE",
      url: `/notification/delete/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      setLoading(false);
      toast.success(data.message);
    } else {
      toast.error(`Failed to delete notification: ${data.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error deleting notification:", error);
    setLoading(false);
    toast.error("Failed to delete notification");
    return {
      success: false,
      message: "Failed to delete notification",
      error,
    };
  }
};

