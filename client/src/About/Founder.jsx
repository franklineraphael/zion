import React from "react";
import BackButton from "../Page/BackButton";

const Founder = () => {
  return (
    <div className="font-serif">
      <BackButton />
      <h1 className="font-bold text-2xl text-center mt-10">Founder</h1>
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden p-6 md:flex gap-8 mt-10 font-serif transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-50">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/pic2.jpg"
            alt="Mrs. Angela Ekebafe"
            className="w-full md:w-[300px] h-auto rounded-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="mt-6 md:mt-0 space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
          <p>
            <strong>Mrs. Angela Ekebafe</strong> is an educationist of
            excellence who is passionate about the spiritual, emotional, and
            educational development of children. She identifies that the needs
            of children go beyond what is readily available in the typical
            educational setting. Thus, armed with a quest to help children fully
            harness their God-given potentials, Zionlight Services was born.
          </p>
          <p>
            Mrs. Ekebafe earned a Bachelor of Science in Education (B.Sc. Ed)
            from the prestigious University of Port Harcourt, and a Master of
            Science degree from the University of Ibadan.
          </p>
          <p>
            To further prepare for the vision she carries, she obtained several
            certifications including: Modern Montessori International (MMI)
            London, Hope for Kids/Lead Today Training, Mailbox Club
            International (for Children’s Ministers), FATE Entrepreneur Program
            (EPP), Word of Faith Bible Institute, and Daystar Leadership Academy
            among others.
          </p>
          <p>
            Her deep love for children and unwavering dedication to helping them
            know God and prosper in all areas of life is what makes Zionlight
            Services a beacon of transformative education and support.
          </p>
        </div>
      </div>
      <h1 className="font-bold text-2xl text-center  mt-40">Meet The Team</h1>
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 font-serif">
        {/* Profile 2 */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-50 rounded-xl">
          <img
            src="/team2.jpg"
            alt="Team Member 2"
            className="w-[200px] h-[200px] object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-bold text-green-800 mb-2">
            Mr.Ifeanyi Ayim
          </h2>
          <p className="text-sm text-gray-700">
            Head of Logistics. Experienced in managing school transportation and
            volunteer coordination for major programs.
          </p>
        </div>

        {/* Profile 3 */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-50 rounded-xl">
          <img
            src="/team3.jpg"
            alt="Team Member 3"
            className="w-[200px] h-[200px] object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-bold text-green-800 mb-2">Miss Ruth</h2>
          <p className="text-sm text-gray-700">
            Academic Coordinator with a deep focus on child-centered education
            and skill acquisition programs.
          </p>
        </div>

        {/* Profile 4 */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-50 rounded-xl">
          <img
            src="/team4.jpg"
            alt="Team Member 4"
            className="w-[200px] h-[200px] object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-bold text-green-800 mb-2">
            Mr. Udy Titus
          </h2>
          <p className="text-sm text-gray-700">
            Music School Director and lead instructor in voice training,
            keyboard, and violin. A passionate music educator.
          </p>
        </div>

        {/* Profile 5 */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-50 rounded-xl">
          <img
            src="/team5.jpg"
            alt="Team Member 5"
            className="w-[200px] h-[200px] object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-bold text-green-800 mb-2">
            Miss Mary Ajewole
          </h2>
          <p className="text-sm text-gray-700">
            Volunteer Coordinator with strong experience in church outreach,
            admin, and children's Bible training sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
