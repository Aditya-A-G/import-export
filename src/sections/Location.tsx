"use client";
import { useState, useEffect } from "react";

import { Accordion } from "@/sections/Accordion";

const data = [
  {
    name: "Dubai",
    location:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7233.928613414238!2d55.198634!3d24.967329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73b4887d9dbf%3A0x2fb2b3a0a4ee08cd!2sGreenhouse%20Foodstuff%20Trading%20LLC!5e0!3m2!1sen!2sus!4v1724574150590!5m2!1sen!2sus",
  },
];

export const Location = () => {
  const [showLocation, setShowLocation] = useState<boolean[]>(
    Array(data.length).fill(false)
  );
  const [selectedLocation, setSelectedLocation] = useState<string>(
    data[0].location
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Show the first location by default on mobile/tablet
    setShowLocation((prevLocations) => {
      const updatedLocation = [...prevLocations];
      updatedLocation[0] = true;
      return updatedLocation;
    });
  }, []);

  const isDesktop = isMounted && window.innerWidth >= 1024;

  return (
    <section className="bg-[#e6e7e8]">
      <div className="border border-gray-400 py-6 h-[169px] md:h-56 lg:h-64 flex justify-center items-center">
        <div className="w-11/12 text-center py-6">
          <h2 className="font-extrabold text-3xl lg:text-4xl">Find us Here</h2>
          <div className="mt-4 font-extrabold">OUR LOCATION</div>
        </div>
      </div>

      <div className="w-full">
        <div className="border-b border-gray-400 h-16 flex justify-center items-center">
          <h3>{data[0].name}</h3>
        </div>

        <iframe
          src={data[0].location}
          className="border-0 w-full h-72 lg:h-[450px] md:h-72"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
