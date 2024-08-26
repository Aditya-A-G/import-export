"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "/public/logo.png";
import menuIcon from "/public/menu-icon.png";
import clsx from "clsx";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header id="top" className="sticky z-50 top-0 bg-white">
      <div className=" flex h-16 cursor-pointer md:px-5">
        <div className="flex-grow md:flex-grow-0 flex justify-center items-center">
          <Image src={logo} alt="logo" />
        </div>

        <div
          className="md:hidden bg-black w-16 md:w-28 flex justify-center items-center "
          onClick={() => setIsNavOpen(true)}
        >
          <Image src={menuIcon} alt="Menu icon" />
        </div>
        <div className="hidden md:flex flex-grow justify-center items-center">
          <ul className="flex  w-full justify-end gap-5">
            <li className="uppercase">
              <a href="#home">Home</a>
            </li>
            <li className="uppercase">
              <a href="#catalogue">Catalogue</a>
            </li>
            <li className="uppercase">
              <a href="#brands">Brands</a>
            </li>
            <li className="uppercase">
              <a href="#location">Location</a>
            </li>
            <li className="uppercase">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={clsx(
          isNavOpen === true
            ? "absolute w-full h-svh top-0 left-0 bg-white z-10 flex flex-col justify-evenly items-center"
            : "hidden"
        )}
      >
        <div
          className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="#home" onClick={() => setIsNavOpen(false)}>
              Home
            </a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="#catalogue" onClick={() => setIsNavOpen(false)}>
              Catalogue
            </a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="#brands" onClick={() => setIsNavOpen(false)}>
              Brands
            </a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="#location" onClick={() => setIsNavOpen(false)}>
              Location
            </a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="#contact" onClick={() => setIsNavOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
