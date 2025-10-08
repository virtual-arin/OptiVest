import React from "react";

const Hero = () => {
  return (
    <div className="px-4 py-12 mx-auto">
      <section className="text-center">
        <h1 className="text-2xl md:text-2xl font-semibold text-gray-800 mb-2">
          Invest Smart, Pay Less
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 mx-auto">
          Enjoy free brokerage for life on all stock deliveries. Flat ₹20 for
          all F&O and Intraday trades.
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-4">
          <img
            src="/media/pricing-eq.svg"
            alt="Free Investment Icon"
            className="h-50 w-50 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Invest for Free
          </h2>
          <p className="text-gray-600">
            We charge zero brokerage for all your equity delivery trades on NSE
            and BSE. Keep all your returns.
          </p>
        </div>
        <div className="p-4">
          <img
            src="/media/other-trades.svg"
            alt="Active Trader Pricing Icon"
            className="h-50 w-50 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Competitive Pricing for Active Traders
          </h2>
          <p className="text-gray-600">
            Intraday trades (Equity, Currency, Commodity) are charged at the
            lower of ₹20 or 0.03% per executed order. All F&O options trades are
            a flat ₹20 per order.
          </p>
        </div>
        <div className="p-4">
          <img
            src="/media/pricing-eq.svg"
            alt="Mutual Funds Icon"
            className="h-50 w-50 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Zero-Commission Direct Mutual Funds
          </h2>
          <p className="text-gray-600">
            Invest in all direct mutual funds absolutely free. We charge ₹0 in
            commissions and ₹0 in DP charges.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
