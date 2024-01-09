import Axios from "./Axios";

import { toast } from "react-toastify";

export const createReportIssue = async (
  issue_details,
  setLoading,
  callback
) => {
  try {
    const { data } = await Axios({
      method: "POST",
      url: `/report-issues/create`,
      data: issue_details,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      toast.success(data.message);
      callback(data);
    } else {
      setLoading(false);
      toast.error(`Failed to create report issue: ${data.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error creating report issue:", error);
    toast.error("Failed to create report issue");
    setLoading(false);
    return {
      success: false,
      message: "Failed to create report issue",
      error,
    };
  }
};

export const getReportIssues = async () => {
  try {
    const { data } = await Axios({
      method: "GET",
      url: `/report-issue`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      return data;
    } else {
      toast.error(`Failed to fetch report issues: ${data.message}`);
      return {
        success: false,
        message: "Failed to fetch report issues",
      };
    }
  } catch (error) {
    console.error("Error fetching report issues:", error);
    toast.error("Failed to fetch report issues");
    return {
      success: false,
      message: "Failed to fetch report issues",
      error,
    };
  }
};

export const getReportIssueById = async (id, setLoading) => {
  setLoading(true);
  try {
    const { data } = await Axios({
      method: "GET",
      url: `/report-issues/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      setLoading(false);
      return data;
    } else {
      toast.error(`Failed to fetch report issue: ${data.message}`);
      setLoading(false);
      return {
        success: false,
        message: "Failed to fetch report issue",
      };
    }
  } catch (error) {
    console.error("Error fetching report issue:", error);
    toast.error("Failed to fetch report issue");
    setLoading(false);
    return {
      success: false,
      message: "Failed to fetch report issue",
      error,
    };
  }
};

export const updateReportIssueById = async (
  issue_details,
  setLoading,
  callback
) => {
  try {
    const { data } = await Axios({
      method: "PUT",
      url: `/report-issues/update/${id}`,
      data: issue_details,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      callback(data);
      setLoading(false);
      toast.success(data.message);
    } else {
      setLoading(false);
      toast.error(`Failed to update report issue: ${data.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error updating report issue:", error);
    toast.error("Failed to update report issue");
    setLoading(false);
    return {
      success: false,
      message: "Failed to update report issue",
      error,
    };
  }
};

export const deleteReportIssueById = async (id, setLoading) => {
  setLoading(true);
  try {
    const { data } = await Axios({
      method: "DELETE",
      url: `/report-issues/delete/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      toast.success(data.message);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(`Failed to delete report issue: ${data.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error deleting report issue:", error);
    toast.error("Failed to delete report issue");
    setLoading(false);
    return {
      success: false,
      message: "Failed to delete report issue",
      error,
    };
  }
};

