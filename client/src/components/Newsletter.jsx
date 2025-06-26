import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!emailPattern.test(value)) {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage("");
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("✅ Subscribed! (not yet saved anywhere)");
    setEmail("");
  };

  return (
    <div className="flex items-center justify-center mt-6 bg-green-50 p-5">
      {/* Subscription Form */}
      <form onSubmit={handleSubscribe} className="w-full max-w-md">
        <h1 className=" text-2xl mb-4 text-center font-bold font-serif">
          Get the Latest Update
        </h1>
        <input
          type="text"
          className={`border w-full px-5 py-3 rounded-lg ${
            message.includes("valid") ? "border-red-500" : "border-black"
          }`}
          required
          value={email}
          onChange={handleChange}
          placeholder="Email address"
        />
        {message && (
          <p
            className={`text-sm mt-2 text-center ${
              message.includes("valid") ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
        <button
          type="submit"
          className="font-bold font-serif bg-green-500 text-black mt-5 p-3 w-full rounded-lg hover:bg-black hover:text-green-500 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
