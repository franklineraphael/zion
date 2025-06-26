import React from "react";
import { TbPointFilled } from "react-icons/tb";
import BackButton from "../Page/BackButton";

const Readingclub = () => {
  return (
    <div className=" font-serif">
      <BackButton />
      <div className="bg-green-50 p-20 md:p-40 font-bold">
        <p className="text-center text-4xl font-bold font-serif">
          Reading Club
        </p>
      </div>
      <div className="p-8">
        <p className=" md:text-2xl mt-20 font-bold text-green-800">
          Reading and sharing stories can:
        </p>
        <li className="mt-10 flex items-center gap-3 text-2xl">
          <TbPointFilled />
          Help your child become familiar with sounds, words, language and the
          value of books
        </li>
        <li className=" mt-3 flex items-center gap-3 text-2xl">
          <TbPointFilled />
          Spark your child’s imagination, stimulate curiosity and help his brain
          development
        </li>
        <li className="mt-3 flex items-center gap-3 text-2xl">
          <TbPointFilled />
          Help your child understand change and new or frightening events, and
          also the strong emotions that can go along with them.
        </li>
        <li className=" mt-3 flex items-center gap-3 text-2xl">
          <TbPointFilled />
          Help your child develop early literacy skills like the ability to
          listen to and understand words
        </li>
      </div>
    </div>
  );
};

export default Readingclub;
