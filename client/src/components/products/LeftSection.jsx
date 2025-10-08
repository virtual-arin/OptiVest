import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <section className="container mx-auto px-6 py-12 lg:px-8">
      <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16 ml-6">
        <div className="flex justify-center p-3">
          <img src={imageUrl} alt={productName} className="max-w-full h-auto" />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {productName}
          </h1>
          <p className="text-lg text-gray-600">{productDescription}</p>
          <div className="flex items-center space-x-8">
            <a href={tryDemo} className="text-blue-600 hover:text-blue-800">
              Try Demo{" "}
              <Link
                to="#"
                className="mt-3 inline-flex items-center text-blue-600 transition-colors duration-300 hover:text-blue-800"
              >
                <FaArrowRightLong className="ml-2" />
              </Link>
            </a>
            <a href={learnMore} className="text-blue-600 hover:text-blue-800">
              Learn More{" "}
              <Link
                to="#"
                className="mt-3 inline-flex items-center text-blue-600 transition-colors duration-300 hover:text-blue-800"
              >
                <FaArrowRightLong className="ml-2" />
              </Link>
            </a>
          </div>
          <div className="flex items-center space-x-8">
            <a href={googlePlay}>
              <img
                src="media/google-play-badge.svg"
                alt="Get it on Google Play"
              />
            </a>
            <a href={appStore}>
              <img
                className="mr-6"
                src="media/appstore-badge.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
