import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-grow items-center justify-center bg-white">
      <div className="text-center p-8">
        <h1 className="text-6xl md:text-9xl font-bold text-blue-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-md md:text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved, deleted, or maybe it never existed.
        </p>
        <Link
          to="/"
          className="btn rounded-lg border-none bg-[#00adee] text-white transition-colors hover:bg-[#009cd4] text-lg px-8 py-3"
        >
          Go to Homepage
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
