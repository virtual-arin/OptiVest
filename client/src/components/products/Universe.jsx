import React from "react";

const Universe = () => {
  return (
    <section className="container mx-auto px-6 py-20 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-gray-800">
          The Optivest Universe
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <div className="text-center">
          <img
            src="media/zerodhafundhouse.png"
            alt="Zerodha Fund House"
            className="h-10 mx-auto mb-4"
          />
          <p className="text-sm text-gray-500">
            Our asset management venture
            <br /> that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="text-center">
          <img
            src="media/sensibull-logo.svg"
            alt="Sensibull"
            className="h-10 mx-auto mb-4"
          />
          <p className="text-sm text-gray-500">
            Options trading platform that lets you <br /> create strategies,
            analyze positions, and examine <br /> data points like open
            interest, FII/DII, and more.
          </p>
        </div>
        <div className="text-center">
          <img
            src="media/tijori.svg"
            alt="Tijori"
            className="h-10 mx-auto mb-4"
          />
          <p className="text-sm text-gray-500">
            Investment research platform <br /> that offers detailed insights on
            stocks, <br /> sectors, supply chains, and more.
          </p>
        </div>
        <div className="text-center">
          <img
            src="media/streak-logo.png"
            alt="Streak"
            className="h-10 mx-auto mb-4"
          />
          <p className="text-sm text-gray-500">
            Systematic trading platform <br /> that allows you to create and
            backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="text-center">
          <img
            src="media/smallcase-logo.png"
            alt="smallcase"
            className="h-10 mx-auto mb-4"
          />
          <p className="text-sm text-gray-500">
            Thematic investing platform <br /> that helps you invest in
            diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="text-center">
          <img
            src="media/ditto-logo.png"
            alt="Ditto"
            className="h-10 mx-auto mb-4"
          />
          <p className="text-sm text-gray-500">
            Personalized advice on life <br /> and health insurance. No spam{" "}
            <br /> and no mis-selling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Universe;
