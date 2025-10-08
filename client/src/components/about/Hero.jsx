import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <section className="py-12 px-6 lg:px-12">
        <h1 className="text-xl font-semibold text-center text-gray-600">
          We began with low-cost broking, making trading accessible.
          <br />
          Now, Optivest is driving innovation with investment technology.
        </h1>
      </section>

      <section className="py-12 px-6 lg:px-6 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 text-gray-600 text-base">
          <article className="space-y-4 md:pl-12">
            <p>
              Optivest was launched on October 25th july, 2025, with a singular
              vision: to dismantle the significant hurdles—be they cost,
              support, or technological complexity—that confront traders and
              investors across India.
            </p>

            <p>
              Today, our revolutionary pricing and internally developed,
              cutting-edge technology have rapidly positioned us as a leading
              innovator in the Indian financial market.
            </p>
            <p>
              Currently, Optivest empowers hundreds of thousands of clients who
              execute millions of trades annually across our powerful,
              integrated investment platforms, making us a significant and
              rapidly growing player in Indian retail trading.
            </p>
          </article>
          <article className="space-y-4 md:pr-12">
            <p>
              In addition to our core platforms, Optivest actively cultivates
              the investor community. We run several popular online educational
              initiatives and foster a community to empower retail traders and
              investors with market knowledge.
            </p>
            <p>
              Through Optivest Ventures, our dedicated fund, we strategically
              invest in promising fintech startups, driving innovation with the
              mission of further expanding the Indian capital markets.
            </p>
            <p>
              We are continuously building and evolving. Stay current with our
              latest developments on the Optivest Blog, see what the media is
              saying about us, or delve deeper into our business and product
              philosophies.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Hero;
