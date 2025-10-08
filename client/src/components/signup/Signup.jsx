import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaMobileAlt } from "react-icons/fa";

const Signup = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !mobile) {
      alert("Please fill in both name and mobile number.");
      return;
    }
    console.log("Form Submitted:", { name, mobile });
    alert(`Welcome, ${name}! Your mobile number is ${mobile}.`);
    setName("");
    setMobile("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans">
      <div className="p-8 bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Create Your Account
          </h2>
          <p className="text-gray-500 mt-2">
            Join OptiVest and start your investment journey.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-3 py-3 text-base border border-gray-300 rounded-lg"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMobileAlt className="text-gray-400" />
              </div>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full pl-10 pr-3 py-3 text-base border border-gray-300 rounded-lg"
                placeholder="Enter your mobile number"
                required
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{" "}
              <Link
                to="/terms"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Terms of Service
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
