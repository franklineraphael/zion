import React from "react";
import { TbPointFilled } from "react-icons/tb";
import BackButton from "../Page/BackButton";

const Afterschoolservices = () => {
  return (
    <div className="font-serif ">
      <BackButton />
      <div className="bg-green-50 p-20 md:p-40 font-bold">
        <p className="text-center text-4xl font-bold">AFTER SCHOOL SERVICE</p>
      </div>
      <div className="mt-10 p-10">
        <h1 className="text-2xl font-bold mt-3 text-green-800">
          The details of our After School are as follows:
        </h1>
        <p className="mt-5 flex items-center gap-3 text-2xl">
          <TbPointFilled />
          Homework Support and Intervention.
        </p>
        <p className="mt-3 flex items-center gap-3 text-2xl">
          <TbPointFilled />
          Common Entrance Examination Lessons.
        </p>
        <p className="mt-3 flex items-center gap-3 text-2xl">
          <TbPointFilled />
          Reading club.
        </p>
        <p className="mt-3 flex items-center gap-3 text-2xl">
          <TbPointFilled />
          Skills acquisition and Home Making training.
        </p>
        <p className="mt-3 flex items-center gap-3 text-2xl">
          <TbPointFilled />
          Daily Fellowship.
        </p>
      </div>
    </div>
  );
};

export default Afterschoolservices;
