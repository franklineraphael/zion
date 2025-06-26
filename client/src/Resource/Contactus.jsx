import React from "react";
import BackButton from "../Page/BackButton";

const Contactus = () => {
  return (
    <div>
      <BackButton />
      <div className="max-w-2xl mx-auto p-8 font-serif">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
          Contact Us
        </h1>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              className="border border-gray-400 p-3 rounded-lg w-full"
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="border border-gray-400 p-3 rounded-lg w-full"
              required
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-400 p-3 rounded-lg w-full"
          />

          <input
            type="text"
            placeholder="Subject *"
            className="border border-gray-400 p-3 rounded-lg w-full"
            required
          />

          <textarea
            placeholder="Your Message *"
            className="border border-gray-400 p-3 rounded-lg w-full h-32"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-green-500 font-bold text-black px-6 py-3 rounded hover:bg-green-700 w-full"
          >
            Send Message
          </button>
        </form>
        <p className="text-center  text-gray-500 mt-8">
          Copyright by Zionlight Service
        </p>
      </div>
    </div>
  );
};

export default Contactus;
