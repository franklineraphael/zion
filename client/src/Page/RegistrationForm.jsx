import React, { useState } from "react";
import BackButton from "./BackButton";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    school: "",
    grade: "",
    fatherFirstName: "",
    fatherLastName: "",
    fatherAddress: "",
    fatherOccupation: "",
    fatherPhone: "",
    fatherEmail: "",
    motherFirstName: "",
    motherLastName: "",
    motherPhone: "",
    motherAddress: "",
    emergencyContact: "",
    hasHealthIssues: "",
    healthExplain: "",
    hasAllergies: "",
    allergyExplain: "",
    declarationAgreed: false,
    verification: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="font-serif">
      <BackButton />
      <h1 className="text-2xl font-bold text-center mb-6 text-green-800">
        After School Form
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto  p-6 rounded md:shadow"
      >
        {/* Child's Name */}
        <fieldset className="mb-6">
          <legend className="text-xl font-bold text-blue-900 mb-2">
            Child's Name
          </legend>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="firstName"
              placeholder="First Name *"
              className="p-2 border rounded"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              placeholder="Last Name *"
              className="p-2 border rounded"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              name="age"
              placeholder="Age *"
              className="p-2 border rounded"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <input
              name="dob"
              placeholder="Date of Birth"
              className="p-2 border rounded"
              value={formData.dob}
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone"
              className="p-2 border rounded"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              name="address"
              placeholder="Address *"
              className="p-2 border rounded col-span-2"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </fieldset>

        {/* Father's Information */}
        <fieldset className="mb-6">
          <legend className="text-xl font-bold text-blue-900 mb-2">
            Father's Information
          </legend>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="fatherFirstName"
              placeholder="First Name *"
              className="p-2 border rounded"
              value={formData.fatherFirstName}
              onChange={handleChange}
              required
            />
            <input
              name="fatherLastName"
              placeholder="Last Name *"
              className="p-2 border rounded"
              value={formData.fatherLastName}
              onChange={handleChange}
              required
            />
            <input
              name="fatherPhone"
              placeholder="Phone"
              className="p-2 border rounded"
              value={formData.fatherPhone}
              onChange={handleChange}
            />
            <input
              name="fatherEmail"
              placeholder="Email"
              className="p-2 border rounded"
              value={formData.fatherEmail}
              onChange={handleChange}
            />
            <input
              name="fatherOccupation"
              placeholder="Occupation"
              className="p-2 border rounded"
              value={formData.fatherOccupation}
              onChange={handleChange}
            />
            <input
              name="fatherAddress"
              placeholder="Address"
              className="p-2 border rounded col-span-2"
              value={formData.fatherAddress}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Mother's Information */}
        <fieldset className="mb-6">
          <legend className="text-xl font-bold text-blue-900 mb-2">
            Mother's Information
          </legend>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="motherFirstName"
              placeholder="First Name *"
              className="p-2 border rounded"
              value={formData.motherFirstName}
              onChange={handleChange}
              required
            />
            <input
              name="motherLastName"
              placeholder="Last Name *"
              className="p-2 border rounded"
              value={formData.motherLastName}
              onChange={handleChange}
              required
            />
            <input
              name="motherPhone"
              placeholder="Phone *"
              className="p-2 border rounded"
              value={formData.motherPhone}
              onChange={handleChange}
              required
            />
            <input
              name="motherAddress"
              placeholder="Address"
              className="p-2 border rounded col-span-2"
              value={formData.motherAddress}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Emergency + Health */}
        <fieldset className="mb-6">
          <legend className="text-xl font-bold text-blue-900 mb-2">
            In Case of Emergency
          </legend>
          <div className="mb-4">
            <label className="block mb-1">Notify:</label>
            <select
              name="emergencyContact"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="mum">Mum</option>
              <option value="dad">Dad</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Any Health Challenges?</label>
            <select
              name="hasHealthIssues"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {formData.hasHealthIssues === "yes" && (
              <input
                name="healthExplain"
                placeholder="Explain..."
                className="w-full mt-2 p-2 border rounded"
                onChange={handleChange}
              />
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Any Allergies?</label>
            <select
              name="hasAllergies"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {formData.hasAllergies === "yes" && (
              <input
                name="allergyExplain"
                placeholder="Explain..."
                className="w-full mt-2 p-2 border rounded"
                onChange={handleChange}
              />
            )}
          </div>
        </fieldset>

        {/* Declaration */}
        <fieldset className="mb-6">
          <legend className="text-xl font-bold text-blue-900 mb-2">
            Declaration
          </legend>
          <p className="mb-3 text-sm text-gray-700">
            I DECLARE THAT MY CHILD/WARD/CHILDREN WILL REMAIN COMMITTED AND
            AVAILABLE AT ALL TIMES AND WILL GIVE A GENUINE REASON FOR ANY
            ABSENCE.
          </p>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="declarationAgreed"
              checked={formData.declarationAgreed}
              onChange={handleChange}
              required
            />
            I Agree
          </label>
        </fieldset>

        {/* Verification */}
        <fieldset className="mb-6">
          <legend className="text-xl font-bold text-blue-900 mb-2">
            Verification
          </legend>
          <input
            type="text"
            name="verification"
            placeholder="Enter any two digits (e.g. 12)"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </fieldset>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-black font-bold py-3 rounded transition"
        >
          Submit Form
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-4">
        © Copyright by Zionlight Service
      </p>
    </div>
  );
};

export default RegistrationForm;
