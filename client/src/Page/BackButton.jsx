// src/components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-green-600 font-semibold hover:underline hover:text-green-800 mt-4"
    >
      <IoArrowBack className="mr-2" />
      Go Back
    </button>
  );
};

export default BackButton;
