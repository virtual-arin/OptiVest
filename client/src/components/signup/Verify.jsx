import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import axios from "axios";
import { serverUrl } from "../../main";

const Verify = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/verify`,
        { code },
        { withCredentials: true }
      );

      if (result.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred during verification."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans">
      <div className="p-8 bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Verify Your Email
          </h2>
          <p className="text-gray-500 mt-2">
            Enter the 6-digit code sent to your email address.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="code"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Verification Code
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaKey className="text-gray-400" />
              </div>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-base font-mono tracking-[.75em] border border-gray-300 rounded-lg text-center"
                placeholder="______"
                maxLength="6"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700"
          >
            {loading ? "Verifying..." : "Verify Account"}
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Didn't receive a code? Check your spam folder or{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            try signing up again
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Verify;
