import React from "react";
import { useState } from "react";
import BackButton from "../Page/BackButton";

const Vibs2020 = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: [],
    availability: [],
    info: "",
    verify: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const arr = form[name];
      const newArr = checked ? [...arr, value] : arr.filter((v) => v !== value);
      setForm((prev) => ({ ...prev, [name]: newArr }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="font-serif">
      <BackButton />
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-6  rounded-lg shadow md:mt-40 "
      >
        <fieldset className="mb-6">
          <legend className="text-xl font-bold  mb-3 text-center text-green-800">
            Vibs 2020 Volunteer Form
          </legend>

          <input
            type="text"
            name="name"
            required
            placeholder="Name *"
            className="w-full p-2 border rounded mb-4"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone *"
            className="w-full p-2 border rounded mb-4"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-4"
            value={form.email}
            onChange={handleChange}
          />

          {/* Area of Interest */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              Area of Interest *
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Teaching",
                "Sanitation",
                "Security & Protocol",
                "Admin & Logistics",
              ].map((role) => (
                <label key={role} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="interest"
                    value={role}
                    onChange={handleChange}
                    required={form.interest.length === 0}
                  />
                  {role}
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              What days will you be available? *
            </label>
            <div className="grid grid-cols-1 gap-2">
              {[
                "Day 1 (Monday, July 29th)",
                "Day 2 (Tuesday, July 30th)",
                "Day 3 (Wednesday, July 31st)",
                "Day 4 (Thursday, August 1st)",
                "Day 5 (Friday, August 2nd)",
              ].map((day) => (
                <label key={day} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="availability"
                    value={day}
                    onChange={handleChange}
                    required={form.availability.length === 0}
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <textarea
            name="info"
            placeholder="Any Additional Info"
            className="w-full p-2 border rounded mb-4"
            rows={3}
            value={form.info}
            onChange={handleChange}
          />

          {/* Verification */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              Verification (Enter any two digits) *
            </label>
            <input
              type="text"
              name="verify"
              placeholder="e.g. 12"
              maxLength={2}
              required
              className="w-full p-2 border rounded"
              value={form.verify}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-black font-bold py-3 rounded transition "
        >
          Submit
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-4">
        © Copyright by Zionlight Service
      </p>
    </div>
  );
};

export default Vibs2020;
