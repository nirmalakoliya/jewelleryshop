"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <>
      <header className="h-20 bg-white relative z-50 border-b-2 border-gray-200">
        <nav className="relative px-2">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <Image
                src="/images/jewellery.png"
                width={90}
                height={100}
                alt=""
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link href="/">
                  <div>Home</div>
                </Link>
              </li>
              <li>
                <Link href="/CustomJewellery">
                  <div>Custom jewellery</div>
                </Link>
              </li>
              <li className="relative group">
                <Link href="#">
                  <div>Categories</div>
                </Link>
                <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>

                <ul className="absolute bg-white p-3 w-52 top-full left-0 hidden group-hover:block shadow-lg">
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <Link href="/GoldJewellery">Gold Jewellery</Link>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <Link href="/DiamondJewellery">Diamond Jewellery</Link>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <Link href="/SilverJewellery">Silver Jewellery</Link>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <Link href="/PlatinumJewellery">Platinum Jewellery</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/About">
                  <div>About</div>
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  <div>Contact</div>
                </Link>
              </li>
            </ul>

            {/* Login In Button - Hidden on Mobile View */}
            <Link
              href="/Login"
              className="bg-red-400 px-5 py-1 rounded-3xl hover:bg-red-500 text-white hidden md:flex"
              role="button"
            >
              Login
            </Link>

            {/* Mobile Menu Icon */}
            <button onClick={toggleMenu} id="mobile-icon" className="md:hidden">
              {isOpen ? <IoCloseSharp /> : <TiThMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden flex justify-center mt-3 w-full">
              <div
                id="mobile-menu"
                className="mobile-menu absolute top-23 w-full"
              >
                <ul className="bg-gray-100 shadow-lg leading-9 font-bold">
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                    <Link href="/">
                      <div onClick={closeMenu} className="block pl-7">
                        Home
                      </div>
                    </Link>
                  </li>
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                    <Link href="/CustomJewellery">
                      <div onClick={closeMenu} className="block pl-7">
                        Custom jewellery
                      </div>
                    </Link>
                  </li>
                  <li
                    className={`border-b-2 border-white ${
                      servicesOpen
                        ? "bg-red-400 text-white"
                        : "hover:bg-red-400 hover:text-white"
                    } pl-4 relative flex items-center`}
                    onClick={toggleServices}
                  >
                    <Link href="#" className=" pl-7 flex items-center">
                      Categories{" "}
                      {servicesOpen ? (
                        <FaLongArrowAltUp className="ml-1" />
                      ) : (
                        <FaLongArrowAltDown className="ml-1" />
                      )}
                      <span className="ml-auto">
                        <i className="fa-solid fa-chevron-right fa-2xs"></i>
                      </span>
                    </Link>

                    {/* Services Submenu */}
                    {servicesOpen && (
                      <ul className="bg-white text-gray-800 w-full">
                        <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                          <Link
                            onClick={closeMenu}
                            className="block pl-16"
                            href="/GoldJewellery"
                          >
                            Gold Jewellery
                          </Link>
                        </li>
                        <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                          <Link
                            onClick={closeMenu}
                            className="block pl-16"
                            href="/DiamondJewellery"
                          >
                            Diamond Jewellery
                          </Link>
                        </li>
                        <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                          <Link
                            onClick={closeMenu}
                            className="block pl-16"
                            href="/SilverJewellery"
                          >
                            Silver Jewellery
                          </Link>
                        </li>
                        <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                          <Link
                            onClick={closeMenu}
                            className="block pl-16"
                            href="/PlatinumJewellery"
                          >
                            Platinum Jewellery
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                    <Link href="/About">
                      <div onClick={closeMenu} className="block pl-7">
                        About
                      </div>
                    </Link>
                  </li>
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                    <Link href="/Contact">
                      <div onClick={closeMenu} className="block pl-7">
                        Contact
                      </div>
                    </Link>
                  </li>
                  {/* Login In Button - Visible on Mobile View */}
                  <li className="pt-4 px-4">
                    <Link
                      href="/Login"
                      className="bg-red-400 px-5 py-1 rounded-3xl hover:bg-red-500 text-white block"
                      role="button"
                      onClick={closeMenu}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
