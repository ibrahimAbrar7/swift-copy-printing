// src/components/HeroSection.tsx

import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center text-center text-gray-50"
      style={{ backgroundImage: "url('/bg-header.png')" }}
    >
      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-7xl font-bold text-shadow">
          RUSH & SAME DAY <br /> SERVICES AVAILABLE
        </h1>

        <button className="mt-6 bg-red-700 hover:bg-red-500 text-white border border-white font-bold py-2 px-12 roun    ed shadow-md transition duration-300">
          ASK US!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
