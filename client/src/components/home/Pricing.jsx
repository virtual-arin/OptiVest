import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Pricing = () => {
  return (
    <section className="container mx-auto px-6 py-12 lg:px-8">
      <div className="grid items-start gap-8 md:grid-cols-2 lg:gap-16">
        <div className="text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 text-left">
            Unbeatable pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="mt-6 inline-flex items-center text-blue-600 transition-colors duration-300 hover:text-blue-800">
            See pricing <FaArrowRightLong className="ml-2" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 border-l-0 border-gray-200 p-4 sm:grid-cols-3 md:border-l md:pl-8">
          <div className="flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:text-left md:flex-row md:gap-4">
            <img
              src="media/pricing-eq.svg"
              alt="Free Account Opening"
              className="h-12 w-12 flex-shrink-0 sm:h-16 sm:w-16"
            />
            <p className="text-sm font-semibold text-gray-700 sm:text-base">
              Free account opening
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:text-left md:flex-row md:gap-4">
            <img
              src="media/pricing-eq.svg"
              alt="Free Equity Delivery and Mutual Funds"
              className="h-12 w-12 flex-shrink-0 sm:h-16 sm:w-16"
            />
            <p className="text-sm font-semibold text-gray-700 sm:text-base">
              Free equity delivery and direct MFs
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:text-left md:flex-row md:gap-4">
            <img
              src="media/other-trades.svg"
              alt="Intraday and F&O Trades"
              className="h-12 w-12 flex-shrink-0 sm:h-16 sm:w-16"
            />
            <p className="text-sm font-semibold text-gray-700 sm:text-base">
              Intraday and F&O
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
