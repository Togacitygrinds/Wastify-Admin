import Axios from "axios";

// Initiate password recovery
export const recoverPassword = async (email) => {
  try {
    const { data } = await Axios.post("/auth/recover-password", { email });
    return data;
  } catch (error) {
    throw error;
  }
};

// Validate password reset token
export const validatePasswordResetToken = async (token) => {
  try {
    const { data } = await Axios.post("/auth/validate-password-reset-token", { token });
    return data.isValid;
  } catch (error) {
    throw error;
  }
};

// Reset user's password
export const resetPassword = async (userId, newPassword) => {
  try {
    const { data } = await Axios.post("/auth/reset-password", { userId, newPassword });
    return data;
  } catch (error) {
    throw error;
  }
};
