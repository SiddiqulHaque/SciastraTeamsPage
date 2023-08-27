// src/components/Navbar.js
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  m-0 p-0 shadow-md  sticky top-0 z-10 w-full    shadow-violet-400 ">
      <div className="sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className=" rounded-lg px-4    text-purple-600 text-2xl">
                Logo
              </span>
            </div>
          </div>
          <div className="hidden md:block text-xl">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-purple-800 hover:bg-purple-100  px-3 py-1 rounded-md text-lg  uppercase  "
              >
                Home
              </a>
              <a
                href="#"
                className="text-purple-800 hover:bg-purple-100  px-3 py-1 rounded-md text-lg uppercase  "
              >
                Courses
              </a>
              <a
                href="#"
                className="text-purple-800 hover:bg-purple-100  px-3 py-1 rounded-md text-lg uppercase "
              >
                Selection
              </a>
              <a
                href="#"
                className="text-purple-800 hover:bg-purple-100  px-3 py-1 rounded-md text-lg uppercase "
              >
                Blogs
              </a>
              <a
                href="#"
                className="text-purple-800 hover:bg-purple-100  px-3 py-1 rounded-md text-lg uppercase "
              >
                Materials
              </a>
              <a
                href="#"
                className="text-purple-800 hover:bg-purple-100  px-3 py-1 rounded-md text-lg uppercase "
              >
                Team
              </a>
              <a
                href="#"
                className="text-purple-800 hover:bg-purple-100  px-3 py-1 rounded-md text-lg uppercase "
              >
                Contact us
              </a>
              <button className=" text-gray-100  px-3 py-1 rounded-md text-lg bg-purple-400 uppercase hover:bg-purple-500  ">
                Login
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-purple-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-xl mr-4"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center">
          <a
            href="#"
            className="text-purple-800 hover:bg-purple-100  block px-3 py-1 rounded-md text-lg uppercase "
          >
            Home
          </a>
          <a
            href="#"
            className="text-purple-800 hover:bg-purple-100  block px-3 py-1 rounded-md text-lg uppercase "
          >
            Courses
          </a>
          <a
            href="#"
            className="text-purple-800 hover:bg-purple-100  block px-3 py-1 rounded-md text-lg uppercase "
          >
            Selections
          </a>
          <a
            href="#"
            className="text-purple-800 hover:bg-purple-100  block px-3 py-1 rounded-md text-lg   uppercase "
          >
            Blogs
          </a>
          <a
            href="#"
            className="text-purple-800 hover:bg-purple-100  block px-3 py-1 rounded-md text-lg   uppercase "
          >
            Materials
          </a>
          <a
            href="#"
            className="text-purple-800 hover:bg-purple-100  block px-3 py-1 rounded-md text-lg   uppercase "
          >
            Team
          </a>
          <a
            href="#"
            className="text-purple-800 hover:bg-purple-100 block px-3 py-1 rounded-md text-lg   uppercase "
          >
            Contact us
          </a>
          <button className=" text-gray-100  px-3 py-1 rounded-md text-lg bg-purple-400 uppercase ">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
