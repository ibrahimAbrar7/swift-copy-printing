"use client";

import React from "react";

const clients = [
  "NCPLUS Incorporated",
  "Profit Planners",
  "Main Floor",
  "Jewelry Sales, Inc",
  "World Press Review",
  "American Museum of Natural History",
  "Viscogliosi Bros., LLC",
  "Arcadia Investment Partners",
  "Arrow Travel & Tours",
  "Furla",
  "Aristeia Capital",
  "Walker Christopher LTD.",
  "Atlantic Horizon International",
  "Leslie Productions - Hey Doll!",
  "The Ginger Man",
  "Axial Capital",
  "UN Permanent Mission of Papua New Guinea",
  "Chelsea Capital",
  "Cohen's Fashion Optical",
  "Drumhead",
  "Fopp's Paris",
  "Roche Bobois",
  "MyPRGenie",
  "New York Power Authority",
];

const Clients = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Clients</h2>
        <p className="text-gray-600 dark:text-gray-200 mb-8">Our Valuable Clients</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded shadow hover:shadow-md transition text-sm font-medium text-gray-700"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
