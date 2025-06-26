import React from "react";
import BackButton from "../Page/BackButton";

const Musicschoolform = () => {
  return (
    <div>
      <BackButton />
      <div className="max-w-3xl mx-auto p-8 font-serif">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
          Music School Form
        </h1>
        <form className="space-y-6">
          <fieldset className="border border-gray-300 p-4 rounded">
            <legend className="font-semibold">Child's Information</legend>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="First Name *"
                className="border border-gray-400 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="border border-gray-400 p-2 rounded"
                required
              />
              <input
                type="number"
                placeholder="Age *"
                className="border border-gray-400 p-2 rounded"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border border-gray-400 p-2 rounded"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                className="border border-gray-400 p-2 rounded"
              />
              <input
                type="text"
                placeholder="School"
                className="border border-gray-400 p-2 rounded"
              />
              <input
                type="text"
                placeholder="Grade"
                className="border border-gray-400 p-2 rounded"
              />
            </div>
            <textarea
              placeholder="Address *"
              className="border border-gray-400 p-2 rounded w-full mt-4"
              required
            ></textarea>
          </fieldset>

          <fieldset className="border border-gray-300 p-4 rounded">
            <legend className="font-semibold">Father's Information</legend>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="First Name *"
                className="border border-gray-400 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="border border-gray-400 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Occupation"
                className="border border-gray-400 p-2 rounded"
              />
              <input
                type="tel"
                placeholder="Phone *"
                className="border border-gray-400 p-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-400 p-2 rounded"
              />
            </div>
            <textarea
              placeholder="Address *"
              className="border border-gray-400 p-2 rounded w-full mt-4"
              required
            ></textarea>
          </fieldset>

          <fieldset className="border border-gray-300 p-4 rounded">
            <legend className="font-semibold">Mother's Information</legend>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="First Name *"
                className="border border-gray-400 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="border border-gray-400 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Occupation"
                className="border border-gray-400 p-2 rounded"
              />
              <input
                type="tel"
                placeholder="Phone *"
                className="border border-gray-400 p-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-400 p-2 rounded"
              />
            </div>
            <textarea
              placeholder="Address *"
              className="border border-gray-400 p-2 rounded w-full mt-4"
              required
            ></textarea>
          </fieldset>

          <div className="space-y-4">
            <label className="block font-semibold">
              In Case of Emergency Notify *
            </label>
            <select className="border border-gray-400 p-2 rounded w-full">
              <option>Mum</option>
              <option>Dad</option>
            </select>

            <label className="block font-semibold mt-4">
              Any Health Challenges? *
            </label>
            <select className="border border-gray-400 p-2 rounded w-full">
              <option>Yes</option>
              <option>No</option>
            </select>
            <textarea
              placeholder="If Yes, Explain"
              className="border border-gray-400 p-2 rounded w-full"
            ></textarea>

            <label className="block font-semibold mt-4">Any Allergies? *</label>
            <select className="border border-gray-400 p-2 rounded w-full">
              <option>Yes</option>
              <option>No</option>
            </select>
            <textarea
              placeholder="If Yes, Explain"
              className="border border-gray-400 p-2 rounded w-full"
            ></textarea>

            <label className="block font-semibold mt-4">Area of Interest</label>
            <div className="grid md:grid-cols-2 gap-4">
              <label>
                <input type="checkbox" className="mr-2" />
                Violin
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Base Guitar
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Keyboard
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Voice Training
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Others
              </label>
            </div>
            <input
              type="text"
              placeholder="Please specify"
              className="border border-gray-400 p-2 rounded w-full mt-2"
            />
          </div>

          <div className="mt-6">
            <label className="block font-semibold mb-2">Declaration</label>
            <p className="text-sm mb-2">
              I DECLARE THAT MY CHILD/WARD/CHILDREN WILL REMAIN COMMITTED AND
              AVAILABLE AT ALL TIMES AND WILL GIVE A GENUINE REASON FOR ANY
              ABSENCE.
            </p>
            <label>
              <input type="checkbox" required className="mr-2" />I Agree
            </label>
          </div>

          <div className="mt-6">
            <label className="block font-semibold mb-2">Verification</label>
            <p className="text-sm mb-2">
              Please enter any two digits * (Example: 12)
            </p>
            <input
              type="text"
              className="border border-gray-400 p-2 rounded w-full"
              required
            />
          </div>

          <button
            type="submit"
            className=" w-full bg-green-500 text-black px-6 py-3 rounded mt-6 hover:bg-green-600 font-bold"
          >
            Submit
          </button>
        </form>
        <p className="text-center text-xs text-gray-500 mt-8">
          Copyright by Zionlight Service
        </p>
      </div>
    </div>
  );
};

export default Musicschoolform;
