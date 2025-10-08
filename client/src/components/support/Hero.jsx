import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import {
  FaUser,
  FaChartLine,
  FaUniversity,
  FaQuestionCircle,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gray-50 mb-6">
      <div className="container mx-auto px-4 py-16 lg:py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          How can we help?
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Have a question? Search our knowledge base for an answer.
        </p>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Link
            to="/support/account"
            className="group block p-6 bg-white rounded-lg border hover:border-blue-500 hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="text-3xl text-gray-500 group-hover:text-blue-600 transition-colors">
                <FaUser />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                Account
              </span>
            </div>
          </Link>
          <Link
            to="/support/trading"
            className="group block p-6 bg-white rounded-lg border hover:border-blue-500 hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="text-3xl text-gray-500 group-hover:text-blue-600 transition-colors">
                <FaChartLine />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                Trading
              </span>
            </div>
          </Link>
          <Link
            to="/support/funds"
            className="group block p-6 bg-white rounded-lg border hover:border-blue-500 hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="text-3xl text-gray-500 group-hover:text-blue-600 transition-colors">
                <FaUniversity />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                Funds
              </span>
            </div>
          </Link>
          <Link
            to="/support/faq"
            className="group block p-6 bg-white rounded-lg border hover:border-blue-500 hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="text-3xl text-gray-500 group-hover:text-blue-600 transition-colors">
                <FaQuestionCircle />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                FAQs
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
