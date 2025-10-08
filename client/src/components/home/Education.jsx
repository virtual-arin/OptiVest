import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Education = () => {
  return (
    <section className="container mx-auto px-6 py-12 lg:px-8">
      <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
        <div className="flex justify-center">
          <img
            src="media/education.svg"
            alt="Market Education Resources"
            className="w-full max-w-md"
          />
        </div>
        <div className="md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-2 text-left">
            Free and open market education
          </h2>
          <div className="mt-4 space-y-8">
            <div>
              <p className="text-lg text-gray-600">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <a className="mt-4 inline-flex items-center text-blue-600 transition-colors duration-300 hover:text-blue-800">
                Varsity <FaArrowRightLong className="ml-2" />
              </a>
            </div>
            <div>
              <p className="text-lg text-gray-600">
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <a className="mt-4 inline-flex items-center text-blue-600 transition-colors duration-300 hover:text-blue-800">
                TradingQ&A <FaArrowRightLong className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
