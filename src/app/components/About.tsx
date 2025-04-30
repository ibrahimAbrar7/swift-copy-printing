import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 bg-white dark:bg-[#0f172a] overflow-hidden">
      <div className="absolute top-0 left-0 z-0 max-w-[60px] md:max-w-[100px] lg:max-w-[200px]">
        <Image
          src="/bg-left.png"
          alt="Left Blocks"
          width={200}
          height={180}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute top-0 right-0 z-0 max-w-[60px] md:max-w-[100px] lg:max-w-[200px]">
        <Image
          src="/bg-right.png"
          alt="Right Blocks"
          width={200}
          height={180}
          className="w-full h-auto"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-medium text-gray-900 dark:text-gray-200">Welcome to</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-gray-200">
          SWIFT COPY PRINTING
        </h1>

        <p className="text-gray-500 dark:text-gray-200 text-xl leading-loose flex justify-center mb-6">
          We pride ourselves on being one of the most experienced and
          professional digital printers in Mid-Manhattan New York. Since 1990 we
          have been utilizing the latest technology, processing, and printing
          materials to make your vision a reality. We provide a number of
          services including offset printing, digital printing, large format
          printing, marketing graphics, banners, business forms, all with a
          comprehensive range of print finishing options.
        </p>

        <p className="text-red-700 dark:text-red-400 italic text-lg">
          As one of the city’s most reliable and quick turnover printers,
          <br />
          we also offer rush & same-day services
        </p>
      </div>
    </section>
  );
};

export default About;
