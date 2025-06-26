import React from "react";
import BackButton from "./BackButton";

const EnquiryForm = () => {
  return (
    <div>
      <BackButton />
      <div className="max-w-xl mx-auto p-8 font-serif">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
          Enquiry Form
        </h1>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              className="border border-gray-400 p-3 rounded-lg w-full"
              required
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="border border-gray-400 p-3 rounded-lg w-full"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email Address *"
            className="border border-gray-400 p-3 rounded-lg w-full"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-400 p-3 rounded-lg w-full"
          />
          <textarea
            placeholder="Your Message *"
            className="border border-gray-400 p-3 rounded-lg w-full h-32"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-green-500 text-black font-bold px-6 py-3 rounded hover:bg-green-600 w-full"
          >
            Submit Enquiry
          </button>
        </form>
        <p className="text-center  text-gray-500 mt-8">
          Copyright by Zionlight Service
        </p>
      </div>
    </div>
  );
};

export default EnquiryForm;
