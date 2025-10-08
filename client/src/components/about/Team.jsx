import React from "react";

const Team = () => {
  return (
    <div className="container mx-auto">
      <section className="py-12 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          People
        </h2>
      </section>

      <section className="py-12 px-6 lg:px-8 border-t border-gray-200">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-1 flex justify-center">
            <figure className="text-center">
              <img
                src="media/Arin.jpg"
                className="rounded-full w-48 h-48 mx-auto object-cover shadow-md"
                alt="Arin Sharma, Founder and CEO of Optivest"
              />
              <figcaption className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Arin Sharma
                </h3>
                <p className="text-md text-gray-600">Founder, CEO</p>
              </figcaption>
            </figure>
          </div>
          <div className="md:col-span-2 text-gray-600 text-base space-y-4">
            <p>
              Arin Sharma founded and bootstrapped Optivest in 2025 to directly
              tackle the obstacles he encountered during his extensive career as
              a proprietary trader, including high costs and outdated
              technology. Today, under his leadership, Optivest is rapidly
              changing the landscape of the Indian broking industry.
            </p>
            <p>
              Arin is recognized for his contributions to financial technology
              and regulation; he often consults on matters related to market
              infrastructure and data. He is a hands-on developer, believing
              that coding is his best tool for understanding and disrupting the
              market.
            </p>

            <p>Coding is his zen.</p>

            <p className="text-sm">
              Connect with Arin on:{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Homepage
              </a>{" "}
              /{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Optivest Forum
              </a>{" "}
              /{" "}
              <a
                href="https://github.com/virtual-arin"
                className="text-blue-600 hover:underline"
              >
                Github
              </a>
            </p>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <figure className="text-center">
              <img
                src="media/advik.png"
                className="rounded-full w-36 h-36 mx-auto object-cover shadow-md"
                alt="Advik, Director Strategy"
              />
              <figcaption className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800">Advik</h4>
                <p className="text-md text-gray-600">Director Strategy</p>
              </figcaption>
            </figure>

            <figure className="text-center">
              <img
                src="media/vishal.png"
                className="rounded-full w-36 h-36 mx-auto object-cover shadow-md"
                alt="Vishal, Chief Operating Officer"
              />
              <figcaption className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800">Vishal</h4>
                <p className="text-md text-gray-600">Chief Operating Officer</p>
              </figcaption>
            </figure>

            <figure className="text-center">
              <img
                src="media/vaishnavi.png"
                className="rounded-full w-36 h-36 mx-auto object-cover shadow-md"
                alt="Vaishnavi, Head of Design"
              />
              <figcaption className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Vaishnavi
                </h4>
                <p className="text-md text-gray-600">Head of Design</p>
              </figcaption>
            </figure>

            <figure className="text-center">
              <img
                src="media/rishita.png"
                className="rounded-full w-36 h-36 mx-auto object-cover shadow-md"
                alt="Rishita, Chief Technology Officer"
              />
              <figcaption className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800">Rishita</h4>
                <p className="text-md text-gray-600">CTO</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
