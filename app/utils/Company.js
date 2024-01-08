import { Axios } from "axios";
import { toast } from "react-toastify";

// Create a new company
export const createCompany = async (company_data, setLoading, callback) => {
  try {
    const { data } = await Axios({
      method: "POST",
      url: "/company/create",
      data: company_data,
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
      error?.response?.data?.message || "Such a waste! Couldn't create company"
    );
  }
};

// Fetch Companies
export const fetchCompanies = async (setLoading, callback) => {
  try {
    const { data } = await Axios({
      method: "GET",
      url: "/company/all",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      callback(data);
    } else {
      setLoading(false);
      toast.error("Sorry we couldn't fetch companies. Please try again");
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message ||
        "Just a waste of bun! Couldn't fetch companies"
    );
  }
};

// Delete a company 
export const deleteCompany = async (id, setLoading, callback) => {
    setLoading(true);
    try {
        const { data } = await Axios({
            method: "DELETE",
            url: `/company/delete/${id}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (data.success) {
            callback(data);
            toast.success("Company deleted successfully");
        } else {
            setLoading(false);
            toast.error("Sorry we couldn't delete company. Please try again");
        }
    } catch (error) {
        setLoading(false);
        toast.error(
            error?.response?.data?.message ||
            "Just a waste of time! Couldn't delete company"
        );
    }
}


// Update a company
export const updateCompany = async (company_data, setLoading, callback) => {
    setLoading(true);
    try {
        const { data } = await Axios({
            method: "PUT",
            url: `/company/update/${company_data._id}`,
            data: company_data,
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (data.success) {
            callback(data);
            toast.success("Company updated successfully");
        } else {
            setLoading(false);
            toast.error("Sorry we couldn't update company. Please try again");
        }
    } catch (error) {
        setLoading(false);
        toast.error(
            error?.response?.data?.message ||
            "Just a waste of time! Couldn't update company"
        );
    }
}


// Fetch a Company 
export const fetchCompany = async (id, setLoading, callback) => {
    setLoading(true);
    try {
        const { data } = await Axios({
            method: "GET",
            url: `/company/${id}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (data.success) {
            callback(data);
        } else {
            setLoading(false);
            toast.error("Sorry we couldn't fetch the requested company at this time.");
        }
    } catch (error) {
        setLoading(false);
        toast.error(
            error?.response?.data?.message ||
            "Just a waste of time! Couldn't fetch company"
        );
    }
}