import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="font-serif bg-black text-white">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-5 max-w-7xl mx-auto">
        {/* Logo & Description */}
        <div>
          <Link to="/" className="flex-shrink-0">
            <img
              src="/zionlogo.jpg"
              alt="Zion Logo"
              className="w-[70px] h-auto"
            />
          </Link>
          <p className="mt-3 text-sm text-white leading-relaxed">
            ZionLight Services is a modern-day educational agency that provides
            children with in-depth knowledge of God, avenues through which their
            potential can be maximally utilized, homework support and
            intervention, skill acquisition training, music training, strategic
            reading and learning techniques, and presentation skills, among
            others.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h1 className="text-2xl font-bold mt-3 text-green-800">
            Our Contact
          </h1>
          <p className="mt-3 text-sm">
            1c Admiral Oduwaiye St, Olowoora, Omole Phase 2 Estate, Lagos,
            Nigeria
          </p>
          <p className="mt-2 text-sm">Phone: +2348130152632</p>
          <p className="mt-2 text-sm">Mobile: +2348035708823</p>
          <p className="mt-2 text-sm">Email: info@zionlightservices.org</p>
        </div>

        {/* Social Links */}
        <div>
          <h1 className="text-2xl font-bold mt-3 text-green-800">
            Connect With Us
          </h1>
          <p className="mt-3 flex items-center gap-3 text-sm">
            <FaFacebook />
            Facebook
          </p>
          <p className="mt-3 flex items-center gap-3 text-sm">
            <AiFillInstagram />
            Instagram
          </p>
          <p className="mt-3 flex items-center gap-3 text-sm">
            <FaTwitter />
            Twitter
          </p>
          <p className="mt-3 flex items-center gap-3 text-sm">
            <BsLinkedin />
            LinkedIn
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black text-white text-center p-4 text-sm">
        <p>© Copyright by ZionLight Services. All Rights Reserved 2025</p>
      </div>
    </div>
  );
};

export default Footer;
