import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Large Format Printing, Posters & Fine Art Prints",
    image: "/one.png",
  },
  {
    title: "Banners Same Day & Signs",
    image: "/two.png",
  },
  {
    title: "Window Adhesive Decals/ Wall Stickers",
    image: "/three.png",
  },
  {
    title: "Brochures, Catalogues and Booklets Printing",
    image: "/four.png",
  },
  {
    title: "Postcards, Wedding & Custom Greeting Cards",
    image: "/five.png",
  },
  {
    title: "Business Cards",
    image: "/six.png",
  },
  {
    title: "Stickers, Labels and Decals",
    image: "/seven.png",
  },
  {
    title: "Offset Printing and Other Printing",
    image: "/eight.png",
  },
  {
    title: "Custom Packaging Solutions",
    image: "/nine.png",
  },
  {
    title: "Photo Printing & Restoration",
    image: "/ten.png",
  },
  {
    title: "Promotional Products",
    image: "/eleven.png",
  },
  {
    title: "Promotional Products",
    image: "/twe.png",
  },
];

const Service = () => {
  return (
    <section className="pb-16 pt-12 px-4 md:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          SERVICES WE PROVIDE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-full h-[200px] relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  className="rounded shadow object-contain" // Changed to 'object-contain'
                />
              </div>
              <p className="mt-4 text-md font-medium text-gray-800 dark:text-gray-200 break-words max-w-[60%] sm:max-w-full">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
