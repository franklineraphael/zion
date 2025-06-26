import React from "react";
import Counter from "./Counter";

const Startcounter = () => {
  return (
    <div className=" bg-white py-16 px-4 md:px-5 md:20">
      <h2 className="text-3xl font-bold text-center mb-10 font-serif">
        Our Impact
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {/* Counter 1 */}
        <div>
          <Counter target={100} duration={2000} />
          <p className="mt-4 text-2xl font-bold font-serif">Volunteers</p>
        </div>

        {/* Counter 2 */}
        <div>
          <Counter target={250} duration={2000} />
          <p className="mt-4 text-2xl font-bold font-serif">Happy Kids</p>
        </div>

        {/* Counter 3 */}
        <div>
          <Counter target={50} duration={2000} />

          <p className="mt-4 text-2xl font-bold font-serif">Funds Raised</p>
        </div>
        <div>
          <Counter target={85} duration={2000} />
          <p className="mt-4 text-2xl font-bold font-serif">
            Programs Completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Startcounter;
