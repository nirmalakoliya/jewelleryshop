"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="border-b border-gray-300 shadow">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/images/jewellery.png"
              width={90}
              height={100}
              alt=""
            />
          </Link>
          <div className="hidden md:flex md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 border-l-red-50 font-bold hover:text-gray-700"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/CustomJewellery"
                    className="text-gray-500 font-bold hover:text-gray-700"
                  >
                    Custom jewellery
                  </Link>
                </li>

                <li>
                  <Link
                    href="/JewelleryPhotos"
                    className="text-gray-500 font-bold hover:text-gray-700"
                  >
                    jewellery Photos
                  </Link>
                </li>

                <li>
                  <Link
                    href="/About"
                    className="text-gray-500 font-bold hover:text-gray-700"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-500 font-bold hover:text-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex md:gap-4">
              <Link
                href="/Login"
                className="rounded-full bg-teal-600 px-5 py-2.5 text-sm  font-bold text-white shadow"
              >
                Login
              </Link>
            </div>
            <div className="block md:hidden">
              <button
                onClick={toggleNavbar}
                className="rounded bg-gray-100 p-2 text-gray-600 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Responsive navigation */}
        {isOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-center gap-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 font-bold hover:text-gray-700"
                    onClick={closeNavbar}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/CustomJewellery"
                    className="text-gray-500 font-bold hover:text-gray-700"
                    onClick={closeNavbar}
                  >
                    Custom jewellery
                  </Link>
                </li>

                <li>
                  <Link
                    href="/JewelleryPhotos"
                    className="text-gray-500 font-bold hover:text-gray-700"
                    onClick={closeNavbar}
                  >
                    jewellery Photos
                  </Link>
                </li>

                <li>
                  <Link
                    href="/About"
                    className="text-gray-500 font-bold hover:text-gray-700"
                    onClick={closeNavbar}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-500 font-bold hover:text-gray-700"
                    onClick={closeNavbar}
                  >
                    Contact
                  </Link>
                </li>

                <div className="flex gap-4">
                  <Link
                    href="/Login"
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm text-white shadow font-bold"
                  >
                    Login
                  </Link>
                </div>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
