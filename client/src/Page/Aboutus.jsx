import React from "react";
import BackButton from "./BackButton";

const Aboutus = () => {
  return (
    <div className="font-serif">
      <BackButton />
      <div className="bg-green-50 p-20 md:p-40 font-bold">
        <p className="text-center text-4xl font-bold"> About Us</p>
      </div>
      <p className="text-center md:text-2xl mt-20">
        ZionLight Services is a modern-day educational agency that provides
        children with in-depth knowledge of God, avenues through which their
        potential can be <br />
        maximally utilized, homework support and intervention, skill acquisition
        training, Music training, strategic reading, and learning techniques,
        and presentation skills among others.
      </p>
      <p className="text-center md:text-2xl mt-10 ">
        Fundamentally, we cater to the spiritual needs of children and teach
        them how to identify their potential and turn them into successes.
        Before the birth of Zionlight <br />
        Services, the management with the desire to impart children with God’s
        undiluted word annually organized a free Vacation Bible School (VBS)
        which had an <br />
        attendance of about 130 children in the first edition and over 300
        children in subsequent editions. This now features as a Weekly
        Children’s Bible School in our agency.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-20 px-8 font-serif text-2xl">
        {[
          {
            title: "OUR VISION",
            text: "  To raise a generation of children who have discovered God and Self, and with this knowledge fulfill their God-given potentials.",
          },
          {
            title: "OUR MISSION",
            text: "To provide an enabling environment where children can hone their potentials.To use hands on biblical materials, extensive bible expositions and practical examples to help the children explore, experiment and discover God.To create an awareness of self in children and the many wonders that are inherent in them through mentorship and coaching.To expose children to hands on training, skills acquisition,and character development, by partnering with parents,NGOs, Churches, Government Parastatals and a host of others.",
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

export default Aboutus;
