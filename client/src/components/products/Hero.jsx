import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-center text-gray-600">
          Optivest Products
        </h1>
        <h3 className="text-xl md:text-2xl text-gray-600 mt-3">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3">
          Check out our{" "}
          <Link
            to="/product"
            className="mt-3 inline-flex items-center text-blue-600 transition-colors duration-300 hover:text-blue-800"
          >
            investment offerings <FaArrowRightLong className="ml-2" />
          </Link>
        </p>
      </div>
    </section>
  );
};
export default Hero;
