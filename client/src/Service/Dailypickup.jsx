import React from "react";
import BackButton from "../Page/BackButton";

const Dailypickup = () => {
  return (
    <div className="font-serif p-3">
      <BackButton />
      <div className="bg-green-50 p-20 md:p-40 font-bold">
        <p className="text-center text-4xl font-bold"> DAILY PICK UP</p>
      </div>
      <p className="text-center md:text-2xl mt-20">
        Our daily pick up service embraces children from the ages of 1 and
        above. This service affords parents the opportunity of having their
        children in a safe and conducive environment, while they attend to their
        daily responsibilities and urgent pressing needs. We also accept
        occasional daily pick-up, this option is mostly used during public
        holidays, weekends, mid –term holidays and vacations. The children will
        be adequately catered for, exposed to activities commensurate to their
        age, and given all round support.
      </p>
    </div>
  );
};

export default Dailypickup;
