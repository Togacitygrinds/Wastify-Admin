import { Axios } from "axios";
import { toast } from "react-toastify";

// Create estafette
export const createSanitaryWorker = async (
  estafette_details,
  setLoading,
  callback
) => {
  try {
    const { data } = await Axios({
      method: "POST",
      url: "/estafette/create",
      data: estafette_details,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      callback(data);
      toast.success("Successfully added a new courier");
    } else {
      setLoading(false),
        toast.error(`Estafette couldn't be added at this time.`);
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message ||
        "Couldn't create estafette at this time."
    );
  }
};

// Fetch all estafettes
export const getSanitaryWorkers = async (setLoading, callback) => {
  try {
    const { data } = await Axios({
      method: "GET",
      url: "/estafette/all",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      callback(data);
    } else {
      toast.error("Just a waste of bundle! We couldn't fetch estafettes");
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message ||
        "Uh oh! No estafettes are available now."
    );
  }
};

// Update Estafette
export const updateSanitaryWorkerById = async (id, setLoading, callback) => {
  setLoading(true);
  try {
    const { data } = await Axios({
      method: "PUT",
      url: `/estafette/update/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      callback(data);
      toast.success(data.message);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("There seems to be an issue with your estafette update.");
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message ||
        "Just a waste! Your estafette update failed."
    );
  }
};

// Delete Estafette
export const deleteSanitaryWorkerById = async (id, callback, setLoading) => {
  try {
    const { data } = await Axios({
      method: "DELETE",
      url: `/estafette/delete/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      callback(data);
      toast.success(data.message);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("There seems to be an issue with your estafette deletion.");
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message ||
        "Just a waste! Your estafette can't be deletd yet."
    );
  }
};

// Get Estafette by Id
export const getSanitaryWorkerById = async (id, callback, setLoading) => {
  setLoading(true);
  try {
    const { data } = await Axios({
      method: "GET",
      url: `/estafette/${id}`,
      headers: {
        "Content-Type": "application/json"
      },
    });
    if(data.success){
        callback(data)
        toast.success(data?.message)
        setLoading(false)
    } else{
        setLoading(false)
        toast.error(`The requested estafette can't be retrieved at this time.`)
    }

  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message ||
        "Hm...The requested estafette can't be displayed at this time."
    );
  }
};
