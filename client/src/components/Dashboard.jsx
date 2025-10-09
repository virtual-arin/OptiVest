import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../main";

const Dashboard = () => {
  const { user, setIsAuthenticated, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the backend to destroy the session/cookie
      await axios.post(
        `${serverUrl}/api/auth/logout`,
        {},
        { withCredentials: true }
      );

      // Update the global auth state
      setIsAuthenticated(false);
      setUser(null);

      // Redirect to the login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // You could show an error message to the user here
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl text-blue-600">OptiVest</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">
                Welcome, {user?.name || "User"}!
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="p-8">
        <h1 className="text-2xl font-semibold text-gray-900">Your Dashboard</h1>
        <div className="mt-4">
          {/* Your dashboard content goes here */}
          <p>This is a protected area. Only logged-in users can see this.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
