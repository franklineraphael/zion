import React, { useState } from "react";
import BackButton from "../Page/BackButton";

const Bibleschoolform = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    grade: "",
    phone: "",
    email: "",
    healthChallenges: "",
    healthExplain: "",
    allergies: "",
    allergyExplain: "",
    emergencyNotify: "",
    declaration: false,
    verification: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(form);
  };

  return (
    <div>
      <BackButton />
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 space-y-6 font-serif"
      >
        <h2 className="text-2xl font-bold text-center text-green-800">
          Bible School Registration Form
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label>Age *</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label>Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label>Gender *</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div>
          <label>Address *</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label>State</label>
            <input
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label>Zip Code</label>
            <input
              type="text"
              name="zip"
              value={form.zip}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label>Grade</label>
            <input
              type="text"
              name="grade"
              value={form.grade}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div>
          <label>Any Health Challenges? *</label>
          <select
            name="healthChallenges"
            value={form.healthChallenges}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {form.healthChallenges === "Yes" && (
            <textarea
              name="healthExplain"
              value={form.healthExplain}
              onChange={handleChange}
              placeholder="Explain here..."
              className="w-full border p-2 mt-2 rounded"
            ></textarea>
          )}
        </div>

        <div>
          <label>Any Allergies? *</label>
          <select
            name="allergies"
            value={form.allergies}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {form.allergies === "Yes" && (
            <textarea
              name="allergyExplain"
              value={form.allergyExplain}
              onChange={handleChange}
              placeholder="Explain here..."
              className="w-full border p-2 mt-2 rounded"
            ></textarea>
          )}
        </div>

        <div>
          <label>In Case of Emergency Notify *</label>
          <input
            type="text"
            name="emergencyNotify"
            value={form.emergencyNotify}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="declaration"
            checked={form.declaration}
            onChange={handleChange}
            required
          />
          <label>
            I DECLARE THAT MY CHILD/WARD/CHILDREN WILL REMAIN COMMITTED AND
            AVAILABLE AT ALL TIMES AND WILL GIVE A GENUINE REASON FOR ANY
            ABSENCE.
          </label>
        </div>

        <div>
          <label>Please enter any two digits *</label>
          <input
            type="text"
            name="verification"
            value={form.verification}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Example: 12"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700  font-bold py-3 rounded-lg mt-4"
        >
          Submit
        </button>

        <p className="text-center text-sm mt-6 text-gray-500">
          © Copyright by Zionlight Service
        </p>
      </form>
    </div>
  );
};

export default Bibleschoolform;
