import React from "react";

const Hero = () => {
  return (
    <section className="container px-4 py-12 mx-auto">
      <div className="flex flex-col items-center text-center">
        <img
          src="media/homeHero.svg"
          alt="OptiVest platform overview"
          className="w-full max-w-3xl mb-8"
        />
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Invest in everything
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
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

export default Hero;
