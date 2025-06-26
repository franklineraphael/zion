import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(null); // for mobile submenu toggle

  const toggleSubMenu = (name) => {
    setSubOpen((prev) => (prev === name ? null : name));
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between p-4 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/zionlogo.jpg"
            alt="Zion Logo"
            className="w-[70px] h-auto"
          />
        </Link>

        {/* Mobile Icon */}
        <div className="md:hidden z-50">
          <button onClick={() => setOpen((prev) => !prev)}>
            {open ? <IoCloseSharp size={28} /> : <GiHamburgerMenu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-black font-serif relative">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
          {/* <Link to="/aboutus" className="hover:text-green-400">
            About Us
          </Link> */}

          {/* Dropdowns */}
          <div className="group relative">
            <span className="hover:text-green-400 cursor-pointer">
              About Us
            </span>
            <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md py-4 px-6 space-y-3 hidden group-hover:block z-50 w-[300px]">
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/aboutus"
              >
                About Us
              </Link>
              {/* <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/mission&vission"
              >
                Mission & Vision
              </Link> */}
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/founder"
              >
                Join The Team
              </Link>
            </div>
          </div>
          <div className="group relative">
            <span className="hover:text-green-400 cursor-pointer">Service</span>
            <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md py-4 px-6 space-y-3 hidden group-hover:block z-50 w-[300px]">
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/daily-pickup"
              >
                Daily Pick-up
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/after-school"
              >
                After School Services
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/reading-club"
              >
                Reading Club
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/bible-school"
              >
                Bible School
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/skills"
              >
                Skill Acquisition
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/music-school"
              >
                Music School
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/nanny-training"
              >
                Nanny Training & Outsourcing
              </Link>
            </div>
          </div>

          <div className="group relative">
            <span className="hover:text-green-400 cursor-pointer">
              Online Registration
            </span>
            <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md py-4 px-6 space-y-3 hidden group-hover:block z-50 w-[300px]">
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/form"
              >
                After School Form
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/music-form"
              >
                Music School Form
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/bible-volunteer"
              >
                Bible School Volunteer
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/bible-form"
              >
                Bible School Form
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/vibs-volunteers"
              >
                VIBS 2020 Volunteers Form
              </Link>
            </div>
          </div>

          <div className="group relative">
            <span className="hover:text-green-400 cursor-pointer">
              Resource
            </span>
            <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md py-4 px-6 space-y-3 hidden group-hover:block z-50 w-[300px]">
              {/* <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/blog"
              >
                Our Blog
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/parenting"
              >
                Parenting Materials
              </Link> */}
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/contact"
              >
                Contact Us
              </Link>
              <Link
                className="hover:bg-green-50 block px-3 py-1 rounded"
                to="/gallery"
              >
                Gallery
              </Link>
            </div>
          </div>

          <Link to="/enquiry-form">
            <button className="bg-green-400 px-5 py-2 rounded-xl ml-4">
              Enquiry
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white text-black font-bold flex flex-col p-6 gap-5 transition-transform duration-300 ease-in-out md:hidden z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="self-end">
          <IoCloseSharp
            size={30}
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          />
        </div>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        {/* <Link to="/aboutus" onClick={() => setOpen(false)}>
          About Us
        </Link> */}
        <div>
          <button onClick={() => toggleSubMenu("aboutus")}>About Us</button>
          {subOpen === "aboutus" && (
            <div className="ml-4 flex flex-col  mt-2 ">
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/aboutus"
              >
                About Us
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/founder"
              >
                Meet The Team
              </Link>
              <hr className="border-t border-gray-200 my-2" />
            </div>
          )}
        </div>

        {/* Mobile Submenus */}
        <div>
          <button onClick={() => toggleSubMenu("services")}>Service</button>
          {subOpen === "services" && (
            <div className="ml-4 flex flex-col  mt-2 ">
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/daily-pickup"
              >
                Daily Pick-up
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/after-school"
              >
                After School Services
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/reading-club"
              >
                Reading Club
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/bible-school"
              >
                Bible School
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/skills"
              >
                Skill Acquisition
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/music-school"
              >
                Music School
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/nanny-training"
              >
                Nanny Training & Outsourcing
              </Link>
              <hr className="border-t border-gray-200 my-2" />
            </div>
          )}
        </div>

        <div>
          <button onClick={() => toggleSubMenu("registration")}>
            Online Registration
          </button>
          {subOpen === "registration" && (
            <div className="ml-4 flex flex-col mt-2">
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/form"
              >
                After School Form
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/music-form"
              >
                Music School Form
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/bible-volunteer"
              >
                Bible School Volunteer
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/bible-form"
              >
                Bible School Form
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/vibs-volunteers"
              >
                VIBS 2020 Volunteers Form
              </Link>
              <hr className="border-t border-gray-200 my-2" />
            </div>
          )}
        </div>

        <div>
          <button onClick={() => toggleSubMenu("resource")}>Resource</button>
          {subOpen === "resource" && (
            <div className="ml-4 flex flex-col  mt-2">
              {/* <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/blog"
              >
                Our Blog
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/parenting"
              >
                Parenting Materials
              </Link>
              <hr className="border-t border-gray-200 my-2" /> */}
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/contact"
              >
                Contact Us
              </Link>
              <hr className="border-t border-gray-200 my-2" />
              <Link
                className="block px-3 py-2 hover:bg-green-50 rounded"
                to="/gallery"
              >
                Gallery
              </Link>
              <hr className="border-t border-gray-200 my-2" />
            </div>
          )}
        </div>

        <Link to="/enquiry-form">
          <button className="mt-auto bg-green-400 text-black p-3 rounded-lg text-xl w-full">
            Enquiry
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
