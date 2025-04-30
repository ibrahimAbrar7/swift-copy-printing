import React from "react";
import Image from "next/image";

const Service = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 bg-white dark:bg-gray-800 overflow-hidden">
      {/* Corner Images */}
      <div className="absolute top-0 left-0 z-0 max-w-[120px] md:max-w-[200px]">
        <Image
          src="/bg-left.png"
          alt="Left Blocks"
          width={200}
          height={180}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute top-0 right-0 z-0 max-w-[120px] md:max-w-[200px]">
        <Image
          src="/bg-right.png"
          alt="Right Blocks"
          width={200}
          height={180}
          className="w-full h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-200 mb-2">
          Services
        </h1>
        <p className="text-gray-600 mb-10 dark:text-gray-200">List</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left text-gray-800 dark:text-gray-200">
          {/* Column 1 */}
          <ul className="space-y-2">
            <li>A-Frame Economy Metal A-Frame</li>
            <li>Aluminium Signs</li>
            <li>Backdrop, Step & Repeat</li>
            <li>Retractable Banners</li>
            <li>Banners Same Day</li>
            <li>Mesh Banners</li>
            <li>Vehicle Decal Printing</li>
            <li>Vehicle Magnets</li>
            <li>Yard Signs</li>
            <li>Binding and Finishing</li>
            <li>Easel Mounting</li>
            <li>Business Card Printing</li>
          </ul>

          {/* Column 2 */}
          <ul className="space-y-2">
            <li>PMS Ink / Spot / Special Color</li>
            <li>Silk Laminated Cards</li>
            <li>Thermography Raised Printing</li>
            <li>Raised Spot UV</li>
            <li>Painted Edge Cards</li>
            <li>Trading Cards</li>
            <li>Business Forms / Snap a Form</li>
            <li>Continuous Forms</li>
            <li>Digital NCR Forms</li>
            <li>Wraparound Book</li>
            <li>Brochures, Catalogues and Booklets</li>
            <li>Color Digital Copying</li>
          </ul>

          {/* Column 3 */}
          <ul className="space-y-2">
            <li>Digital Printing</li>
            <li>High Speed B&W Copying</li>
            <li>Legal Copying and Scanning</li>
            <li>Oversize Color/BW Copying, Blueprints, Scanning</li>
            <li>Backlit Film Posters / Duratrans</li>
            <li>Bulk Posters - High Volume</li>
            <li>Cutout Stand Up Display / Contour Cut</li>
            <li>Fine Art Print / Canvas Printing</li>
            <li>Mounting</li>
            <li>Blind Embossing / Debossing</li>
            <li>Die Cutting</li>
            <li>Flyers / Sell Sheets</li>
          </ul>

          {/* Column 4 */}
          <ul className="space-y-2">
            <li>Foil Stamping / Foil Printing</li>
            <li>Raised Stationery</li>
            <li>Hang Tags / String Tags</li>
            <li>Offset Printing / Spot PMS Ink</li>
            <li>Posters - High Volume</li>
            <li>Tabs</li>
            <li>Occasion Cards</li>
            <li>Postcards</li>
            <li>Wedding Cards</li>
            <li>Basic Presentation Folders</li>
            <li>Presentation Folders</li>
            <li>Stickers, Labels & Decals</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
