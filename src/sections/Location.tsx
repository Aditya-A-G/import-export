"use client";
import { useState, useEffect } from "react";

import { Accordion } from "@/sections/Accordion";

const data = [
  {
    name: "Dubai",
    location:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7233.928613414238!2d55.198634!3d24.967329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73b4887d9dbf%3A0x2fb2b3a0a4ee08cd!2sGreenhouse%20Foodstuff%20Trading%20LLC!5e0!3m2!1sen!2sus!4v1724574150590!5m2!1sen!2sus",
  },
  {
    name: "QATAR",
    location:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7221.864463542514!2d51.444075!3d25.171766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d14d48195edd%3A0xbb1021e61b5ff09f!2sStreet%2043%2C%20Qatar!5e0!3m2!1sen!2sin!4v1724574320259!5m2!1sen!2sin",
  },
  {
    name: "OMAN",
    location:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7314.065290173565!2d58.169217!3d23.567271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de2a1a9ad0389%3A0x30678e3f47abb4d1!2sPublic%20Establishment%20For%20Industrial%20Estates%20-%20Madayn!5e0!3m2!1sen!2sus!4v1724574387524!5m2!1sen!2sus",
  },
  {
    name: "SAUDI ARABIA-RIYADH",
    location:
      "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7250.548118596635!2d46.687893!3d24.683104!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1724574476691!5m2!1sen!2sus",
  },
  {
    name: "SAUDI ARABIA-JEDDAH",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475325.0312815611!2d38.881506187040955!3d21.449800192784355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1724574506486!5m2!1sen!2sus",
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
    setIsMounted(true)
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
          <h2 className="font-extrabold text-3xl lg:text-4xl">
            Find us all over the GCC.
          </h2>
          <div className="mt-4 font-extrabold">OUR LOCATIONS</div>
        </div>
      </div>
      <div className="w-full lg:grid grid-cols-5">
        {data.map((item, index) => {
          return (
            <Accordion
              key={item.name}
              item={item}
              show={showLocation[index]}
              index={index}
              setShowLocation={setShowLocation}
              setSelectedLocation={setSelectedLocation}
              isDesktop={isDesktop}
            />
          );
        })}
      </div>

      {isDesktop && selectedLocation && (
        <div className="w-full mt-4">
          <iframe
            src={selectedLocation}
            className="border-0 w-full h-72 lg:h-[450px] md:h-72"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </section>
  );
};
