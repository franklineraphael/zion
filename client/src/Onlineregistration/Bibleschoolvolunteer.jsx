import React from "react";
import { useState } from "react";
import BackButton from "../Page/BackButton";

const Bibleschoolvolunteer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    qualification: "",
    hasExperience: "",
    interest: [],
    additionalInfo: "",
    verification: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedInterests = checked
        ? [...formData.interest, value]
        : formData.interest.filter((item) => item !== value);
      setFormData({ ...formData, interest: updatedInterests });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // handle form submission logic here
  };
  return (
    <div>
      <BackButton />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded font-serif mt-5">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-800">
          Bible School Volunteer Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Full Name *</label>
            <input
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-400 px-4 py-2 rounded mt-1"
            />
          </div>

          <div>
            <label>Phone Number *</label>
            <input
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-400 px-4 py-2 rounded mt-1"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-400 px-4 py-2 rounded mt-1"
            />
          </div>

          <div>
            <label>Gender *</label>
            <div className="flex gap-4 mt-1">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  required
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={handleChange}
                />{" "}
                Option 3
              </label>
            </div>
          </div>

          <div>
            <label>Educational Qualification</label>
            <input
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="e.g. B.Sc"
              className="w-full border border-gray-400 px-4 py-2 rounded mt-1"
            />
          </div>

          <div>
            <label>
              Any Previous Teaching Experience in the Children's Church?
            </label>
            <div className="flex gap-4 mt-1">
              <label>
                <input
                  type="radio"
                  name="hasExperience"
                  value="Yes"
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="hasExperience"
                  value="No"
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>

          <div>
            <label>Area of Interest *</label>
            <div className="flex flex-col mt-1">
              <label>
                <input
                  type="checkbox"
                  value="Teaching"
                  onChange={handleChange}
                />{" "}
                Teaching
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Front Desk"
                  onChange={handleChange}
                />{" "}
                Front Desk
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Security & Protocol"
                  onChange={handleChange}
                />{" "}
                Security & Protocol
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Admin & Logistics"
                  onChange={handleChange}
                />{" "}
                Admin & Logistics
              </label>
            </div>
          </div>

          <div>
            <label>Any Additional Info</label>
            <textarea
              name="additionalInfo"
              rows="3"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full border border-gray-400 px-4 py-2 rounded mt-1"
            />
          </div>

          <div>
            <label>Verification *</label>
            <input
              name="verification"
              required
              value={formData.verification}
              onChange={handleChange}
              placeholder="Enter any two digits e.g. 12"
              className="w-full border border-gray-400 px-4 py-2 rounded mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-black py-2 rounded font-bold hover:bg-green-700"
          >
            Submit
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          © Copyright by Zionlight Service
        </p>
      </div>
    </div>
  );
};

export default Bibleschoolvolunteer;
