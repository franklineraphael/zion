import React from "react";
import BackButton from "../Page/BackButton";

const Gallery = () => {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];
  return (
    <div>
      <BackButton />
      <div className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 font-serif text-green-800">
          Our Moments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-40">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg group transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover group-hover:opacity-80 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
