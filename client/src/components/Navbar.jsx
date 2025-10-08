import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 flex items-center justify-between flex-wrap p-4 sticky top-0 z-50">
      <div className="flex items-center flex-shrink-0 text-gray-800 ml-5">
        <Link to="/">
          <img src="media/logo.png" alt="OptiVest logo" className="h-15" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-800 mr-2"
          aria-controls="main-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        id="main-nav"
        className={`${
          isOpen ? "block" : "hidden"
        } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <ul className="text-lg lg:flex-grow lg:flex lg:justify-end ml-4">
          <li>
            <Link
              to="/signup"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 mr-10"
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 mr-10"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 mr-10"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 mr-10"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 mr-10"
            >
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
