"use client";
import Link from "next/link";
import React, { useState } from "react";

const HeaderTwo: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-gray-800 p-4 sticky top-0 z-50 border-b-1">
      <nav>
        <div className="hidden lg:flex justify-center space-x-6">
          <ul className="flex">
            <li>
              <Link
                href="/"
                className="text-white text-lg font-semibold uppercase hover:text-red-400 py-4 px-5 xl:px-7"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white text-lg font-semibold uppercase hover:text-red-400 py-4 px-5 xl:px-7"
              >
                About
              </Link>
            </li>{" "}
            <li>
              <Link
                href="/services"
                className="text-white text-lg font-semibold uppercase hover:text-red-400 py-4 px-5 xl:px-7"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-white text-lg font-medium uppercase hover:text-red-400 py-4 px-5 xl:px-7"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/speciality"
                className="text-white text-lg font-semibold uppercase hover:text-red-400 py-4 px-5 xl:px-7"
              >
                Speciality
              </Link>
            </li>
            <li>
              <Link
                href="/clients"
                className="text-white text-lg font-semibold uppercase hover:text-red-400 py-4 px-5 xl:px-7"
              >
                Clients
              </Link>
            </li>{" "}
            {/* Adjusted font size */}
            <li>
              <Link
                href="/file-upload"
                className="text-white text-lg font-semibold uppercase hover:text-red-400 py-4 px-5 xl:px-7"
              >
                File Upload
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white text-lg font-semibold uppercase hover:text-red-400 py-4 px-5 xl:px-7"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:hidden flex justify-center items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </button>
        </div>

        <ul
  className={`lg:hidden pb-4 flex flex-col items-center absolute w-full bg-gray-800 z-50 transform transition-all duration-300 ease-in-out origin-top ${
    isMobileMenuOpen
      ? 'opacity-100 scale-y-100 pointer-events-auto'
      : 'opacity-0 scale-y-0 pointer-events-none'
  }`}
>
  <li>
    <Link
      href="/"
      className="text-white text-xl font-semibold uppercase hover:text-red-400 py-2 w-full"
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      href="/about"
      className="text-white text-xl font-semibold uppercase hover:text-red-400 py-2"
    >
      About
    </Link>
  </li>
  <li>
    <Link
      href="/services"
      className="text-white text-xl font-semibold uppercase hover:text-red-400 py-2"
    >
      Services
    </Link>
  </li>
  <li>
    <Link
      href="/products"
      className="text-white text-xl font-semibold uppercase hover:text-red-400 py-2"
    >
      Products
    </Link>
  </li>
  <li>
    <Link
      href="/speciality"
      className="text-white text-xl font-semibold uppercase hover:text-red-400 py-2"
    >
      Speciality
    </Link>
  </li>
  <li>
    <Link
      href="/clients"
      className="text-white text-xl font-semibold uppercase hover:text-red-400 py-2"
    >
      Clients
    </Link>
  </li>
  <li>
    <Link
      href="/file-upload"
      className="text-white text-xl font-semibold uppercase hover:text-red-400 py-2"
    >
      File Upload
    </Link>
  </li>
  <li>
    <Link
      href="/contact"
      className="text-white text-xl font-semibold uppercase hover:text-red-400 py-2"
    >
      Contact
    </Link>
  </li>
</ul>

      </nav>
    </header>
  );
};

export default HeaderTwo;
