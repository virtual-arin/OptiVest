import React from "react";

const OpenAccount = () => {
  return (
    <section className="container px-4 py-12 mx-auto">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          Open a Optivest account
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          type="button"
          className="btn rounded-lg border-none bg-[#00adee] text-white transition-colors hover:bg-[#009cd4] text-lg px-8 py-3"
        >
          Sign up for free
        </button>
      </div>
    </section>
  );
};

export default OpenAccount;
