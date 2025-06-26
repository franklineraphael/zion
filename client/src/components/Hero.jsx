import React from "react";

const Hero = () => {
  return (
    <div>
      <img
        src="/pic1.jpg"
        alt=""
        className="w-full  md:h-[800px] object-cover"
      />

      {/* <div className="flex items-center justify-center gap-6 mt-20 ">
        <div className="shadow-lg w-[300px] p-5 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-50 rounded-xl">
          <h1 className="font-bold text-1xl">SUMMER BOOT CAMP</h1>
          <p className="mt-3">
            Our Skill Acquisition program is a professional training that offers
            several skills for kids to acquire the necessary skills that they
            are passionate about at an affordable price!
          </p>
        </div>
        <div className="shadow-lg w-[300px] p-5 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-50 rounded-xl">
          <h1 className="font-bold text-1xl">Home CARE SERVICES</h1>
          <p className="mt-3">
            We train and outsource qualified professionals who can take care of
            your home and infants during working hours with assurance of safety.
          </p>
        </div>
        <div className="shadow-lg w-[300px] p-5 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-50 rounded-xl">
          <h1 className="font-bold text-1xl">SCHOOL BUS SERVICES</h1>
          <p className="mt-3">
            We provide teaching institutions and individuals with reliable
            transportation and affordable delivery services 5 days a week.
          </p>
        </div>
        <div className="shadow-lg w-[300px] p-5 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-50 rounded-xl">
          <h1 className="font-bold text-1xl">After-School Education</h1>
          <p className="mt-3">
            We have experienced and intelligible instructors to give your child
            the advantage in their academics.
          </p>
        </div>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 px-4">
        {[
          {
            title: "SUMMER BOOT CAMP",
            text: "Our Skill Acquisition program is a professional training that offers several skills for kids to acquire the necessary skills that they are passionate about at an affordable price!",
          },
          {
            title: "Home CARE SERVICES",
            text: "We train and outsource qualified professionals who can take care of your home and infants during working hours with assurance of safety.",
          },
          {
            title: "SCHOOL BUS SERVICES",
            text: "We provide teaching institutions and individuals with reliable transportation and affordable delivery services 5 days a week.",
          },
          {
            title: "After-School Education",
            text: "We have experienced and intelligible instructors to give your child the advantage in their academics.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="shadow-lg min-h-[200px] flex flex-col justify-between w-full p-5 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-50 rounded-xl"
          >
            <div>
              <h1 className="font-bold text-xl text-green-800">{item.title}</h1>
              <p className="mt-3 text-gray-700">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
