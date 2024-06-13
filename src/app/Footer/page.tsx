import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-700	  w-full">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Link href="/">
                <Image
                  src="/images/jewellery.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            <p className="mt-4 text-center text-sm text-gray-50 lg:mt-0 lg:text-right">
              Jewellery Shop &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
