import React from "react";
import Image from "next/image";

const Speciality = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 bg-white overflow-hidden">
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
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Specialty Printing
        </h1>
        <p className="text-gray-600 mb-10">Standout finishes & unique materials</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left text-gray-800">
          {/* Column 1 */}
          <ul className="space-y-2">
            <li>Blind Embossing / Debossing</li>
            <li>Foil Stamping / Foil Printing</li>
            <li>Die Cutting</li>
            <li>Silk Laminated Cards</li>
            <li>Raised Spot UV</li>
            <li>Painted Edge Cards</li>
            <li>Thermography (Raised Ink)</li>
            <li>Fine Art Prints</li>
            <li>Canvas Printing</li>
            <li>Custom Hang Tags</li>
          </ul>

          {/* Column 2 */}
          <ul className="space-y-2">
            <li>Cutout Stand Up Displays</li>
            <li>Special Color Matching (PMS)</li>
            <li>Embossed Stationery</li>
            <li>Raised Letterhead & Envelopes</li>
            <li>String Tags with Hole Punching</li>
            <li>Luxury Business Cards</li>
            <li>Custom Invitations</li>
            <li>Wedding Card Sets</li>
            <li>Special Finishing Services</li>
            <li>Presentation Folders</li>
          </ul>

          {/* Column 3 */}
          <ul className="space-y-2">
            <li>Occasion Cards with Texture</li>
            <li>Custom Die Cut Shapes</li>
            <li>Spot Gloss Effects</li>
            <li>Soft Touch Lamination</li>
            <li>Custom Stickers & Labels</li>
            <li>Textured Paper Printing</li>
            <li>Variable Data Specialty Prints</li>
            <li>Rounded Corner Finishes</li>
            <li>Premium Greeting Cards</li>
            <li>Custom Certificates</li>
          </ul>

          {/* Column 4 */}
          <ul className="space-y-2">
            <li>Notepads with Foil</li>
            <li>Unique Bookmark Designs</li>
            <li>Custom Tabs Printing</li>
            <li>Raised Foil Business Cards</li>
            <li>Folded Business Cards</li>
            <li>Embossed Logo Branding</li>
            <li>Custom Packaging Labels</li>
            <li>Spot UV Brochures</li>
            <li>Metallic Ink Printing</li>
            <li>Luxury Invitations with Ribbons</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
