// Import necessary dependencies
"use client";

import { useState } from "react";
import { AdminSignUp } from "../../utils/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

// Functional component for adding a new admin
const AddNewAdmin = () => {
  // State variables for username, password, and loading
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Router instance
  const router = useRouter();

  // Function to create a new admin
  const createNewAdmin = async (ev) => {
    ev.preventDefault();
    setLoading(true);

    const adminInfo = {
      username: username,
      password: password,
    };

    // Call the AdminSignUp function with adminInfo
    AdminSignUp(
      adminInfo,
      setLoading,
      () => {
        // Reset the form on successful creation
        setUsername("");
        setPassword("");
        setLoading(false);

        // Redirect to a different page if needed
        // router.push("/dashboard");
      },
      (error) => {
        // Handle errors, show error messages, etc.
        toast.error(error.message || "Error creating admin");
        setLoading(false);
      }
    );
  };

  // Return JSX structure
  return (
    <div className="my-8 rounded-lg min-w-[1200px]  flex gap-4 flex-col overflow-x-hidden overflow-y-auto bg-white h-[85%] p-8 ">
      <h1 className="text-4xl font-bold">Register an administrator</h1>

      <div className="flex">
        <h1 className="text-xl font text-gray-500">
          Don't do the work alone. Add someone to help!
        </h1>
        <div>
          <div className="flex flex-col gap-2 w-full max-w-lg">
            {/* Form for creating a new admin */}
            <form className="w-full" onSubmit={createNewAdmin}>
              {/* Username Input Field */}
              <label htmlFor="username" className="px-1 py-2 text-lg">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                className="input-field" // Add a class for styling
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              {/* Password Input Field */}
              <label htmlFor="password" className="px-1 py-2 text-lg">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                className="input-field" // Add a class for styling
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Submit Button */}
              <div className="btn justify-center mt-3 w-full">
                <button
                  type="submit"
                  disabled={loading}
                  className="button" // Add a class for styling
                >
                  {loading ? `Creating...` : `Create Admin`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default AddNewAdmin;
