import React from "react";

const CreateTicket = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Still need help? Create a ticket
            </h2>
            <p className="text-gray-600 mt-2">
              Our support team will get back to you as soon as possible.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Issue with my account"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Account</option>
                <option>Trading & Markets</option>
                <option>Funds</option>
                <option>Technical Issue</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please describe your issue in detail..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn rounded-lg bg-[#00adee] text-white transition-colors hover:bg-[#009cd4] text-lg px-8 py-3"
              >
                Create Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateTicket;
