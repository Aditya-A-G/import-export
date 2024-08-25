"use client";

import Image from "next/image";
import logo from "/public/logo.png";
import searchIcon from "/public/icon-search.png";
import menuIcon from "/public/menu-icon.png";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [showMobileInput, setShowMobileInput] = useState(false);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const mobileInputRef = useRef<null | HTMLInputElement>(null);

  const handleSearchClick = () => {
    setShowInput((prev) => !prev);
  };

  const handleMobileSearchClick = () => {
    setShowMobileInput((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleMobileClickOutside = (event: MouseEvent) => {
      if (
        mobileInputRef.current &&
        !mobileInputRef.current.contains(event.target as Node)
      ) {
        console.log("this is making the problem");
        setShowMobileInput(false);
      }
    };

    document.addEventListener("mousedown", handleMobileClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleMobileClickOutside);
    };
  }, []);

  return (
    <header id="top">
      <div className="flex justify-center py-2.5 bg-[#39b54a]">
        <div className="font-medium tracking-tighter text-sm">
          Click here to download our catalogue{" "}
        </div>
      </div>

      <div className="md:hidden flex h-16">
        {showMobileInput === false && (
          <div className="bg-gray-300 w-16 flex justify-center items-center border-2 border-r-gray-400">
            <button onClick={handleMobileSearchClick}>
              <Image src={searchIcon} alt="Search icon"  className="text-black"/>
            </button>
          </div>
        )}

        {showMobileInput === true && (
          <div className="md:hidden flex items-center gap-4 px-2 w-full ">
            <div className={clsx("flex flex-grow justify-center items-center")}>
              <input
                type="text"
                placeholder="Search"
                ref={mobileInputRef}
                // autoFocus
                className="border-none outline-none text-lg w-full text-center bg-inherit placeholder:text-2xl placeholder:font-bold"
              />
            </div>
            <button onClick={handleMobileSearchClick}>
              <Image src={searchIcon} alt="Search icon" />
            </button>
            <div
              onClick={() => setShowMobileInput(false)}
              className="cursor-pointer text-lg font-bold"
            >
              X
            </div>
          </div>
        )}

        {showInput === false && (
          <>
            {" "}
            <div className="flex-grow flex justify-center items-center">
              <Image src={logo} alt="logo" />
            </div>
            <div className="bg-black w-16 md:w-28 flex justify-center items-center">
              <Image src={menuIcon} alt="Menu icon" />
            </div>
          </>
        )}
      </div>

      {/* for tablet, desktop */}
      <div className="hidden md:flex h-16">
        <div className=" flex justify-center items-center">
          <Image src={logo} alt="logo" />
        </div>
        <div className="bg-gray-100 w-14 px-6 flex justify-end items-center gap-6 border-2 border-l-gray-400 flex-grow">
          {showInput === true && (
            <div className={clsx("flex flex-grow justify-center items-center")}>
              <input
                type="text"
                placeholder="Search"
                ref={inputRef}
                autoFocus
                className="border-none outline-none text-2xl w-full text-center bg-inherit"
              />
            </div>
          )}
          <button onClick={handleSearchClick}>
            <Image src={searchIcon} alt="Search icon" />
          </button>
        </div>
        <div className="bg-black w-14 flex justify-center items-center">
          <Image src={menuIcon} alt="Menu icon" />
        </div>
      </div>
    </header>
  );
};
