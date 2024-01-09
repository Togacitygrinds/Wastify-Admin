import Axios from "./Axios";
import Cookies from 'js-cookie';

// Function to get the access token from cookies
const getAccessToken = () => {
  const accessToken = Cookies.get(process.env.JWT_SECRET_KEY);
  return accessToken || '';
};

// Fetch User Data with Authentication
export const fetchUserData = async (route, callback) => {
  try {
    // Get the access token
    const accessToken = getAccessToken();

    // Set up axios instance
    const api = Axios.create({
      baseURL: 'https://wastify-backend.onrender.com',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    // Make API request
    const { data } = await api.get(`/${route}`);
    callback(data.data);
  } catch (error) {
    console.log(
      error?.response?.data?.message || "Something went wrong."
    );
  }
};
