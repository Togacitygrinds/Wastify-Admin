import Axios from './Axios';
import { toast } from 'react-toastify';

// Create a new tracker
export const createTracker = async (trackerData, setLoading, callback) => {
  try {
    const { data } = await Axios({
      method: 'POST',
      url: '/tracker/create',
      data: trackerData,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (data.success) {
      callback(data);
      toast.success('Tracker created successfully');
    } else {
      setLoading(false);
      toast.error("Sorry we couldn't create the tracker. Please try again");
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message || "Just a waste of time! Couldn't create the tracker"
    );
  }
};

// Fetch Trackers
export const fetchTrackers = async (setLoading, callback) => {
  try {
    const { data } = await Axios({
      method: 'GET',
      url: '/tracker/all',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (data.success) {
      callback(data);
    } else {
      setLoading(false);
      toast.error("Sorry we couldn't fetch trackers. Please try again");
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message || "Just a waste of time! Couldn't fetch trackers"
    );
  }
};

// Delete a tracker
export const deleteTracker = async (id, setLoading, callback) => {
  setLoading(true);
  try {
    const { data } = await Axios({
      method: 'DELETE',
      url: `/tracker/delete/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (data.success) {
      callback(data);
      toast.success('Tracker deleted successfully');
    } else {
      setLoading(false);
      toast.error("Sorry we couldn't delete the tracker. Please try again");
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message || "Just a waste of time! Couldn't delete the tracker"
    );
  }
};

// Update a tracker
export const updateTracker = async (trackerData, setLoading, callback) => {
  setLoading(true);
  try {
    const { data } = await Axios({
      method: 'PUT',
      url: `/tracker/update/${trackerData._id}`,
      data: trackerData,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (data.success) {
      callback(data);
      toast.success('Tracker updated successfully');
    } else {
      setLoading(false);
      toast.error("Sorry we couldn't update the tracker. Please try again");
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message || "Just a waste of time! Couldn't update the tracker"
    );
  }
};

// Fetch a Tracker
export const fetchTracker = async (id, setLoading, callback) => {
  setLoading(true);
  try {
    const { data } = await Axios({
      method: 'GET',
      url: `/tracker/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (data.success) {
      callback(data);
    } else {
      setLoading(false);
      toast.error("Sorry we couldn't fetch the requested tracker at this time.");
    }
  } catch (error) {
    setLoading(false);
    toast.error(
      error?.response?.data?.message || "Just a waste of time! Couldn't fetch the tracker"
    );
  }
};
