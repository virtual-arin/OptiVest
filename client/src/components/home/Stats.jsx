import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Stats = () => {
  return (
    <>
      <section className="pt-12 pb-8 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="text-left mb-10 md:mb-0">
              <h1 className="text-2xl md:text-2xl font-semibold text-gray-800 mb-6 text-left">
                Trust with confidence
              </h1>

              <div>
                <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 text-left mb-2">
                  Customer-first always
                </h2>
                <p className="text-gray-600 mb-6 text-base md:text-lg">
                  That's why 1.6+ crore customers trust Optivest with ~ ₹6 lakh
                  crores of equity investments, making us India’s largest
                  broker; contributing to 15% of daily retail exchange volumes
                  in India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 mb-2 text-left">
                  No spam or gimmicks
                </h2>
                <p className="text-gray-600 mb-6 text-base md:text-lg">
                  No gimmicks, spam, "gamification", or annoying push
                  notifications. High quality apps that you use at your pace,
                  the way you like.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 mb-2 text-left">
                  The Optivest universe
                </h2>
                <p className="text-gray-600 mb-6 text-base md:text-lg">
                  Not just an app, but a whole ecosystem. Our investments in 30+
                  fintech startups offer you tailored services specific to your
                  needs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 mb-2 text-left">
                  Do better with money
                </h2>
                <p className="text-gray-600 mb-6 text-base md:text-lg">
                  With initiatives like Nudge and Kill Switch, we don't just
                  facilitate transactions, but actively help you do better with
                  your money.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 md:mt-0">
              <img
                src="media/ecosystem.png"
                alt="OptiVest platform overview"
                className="w-full max-w-md rounded-lg shadow-lg mb-8"
              />
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300"
                >
                  Explore our products <FaArrowRightLong className="ml-2" />
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300"
                >
                  Try Optivest demo <FaArrowRightLong className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center mt-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">
            Featured in
          </h2>
          <img
            src="media/press-logos.png"
            alt="Press logos"
            className="w-full max-w-2xl"
          />
        </div>
      </section>
    </>
  );
};

export default Stats;
