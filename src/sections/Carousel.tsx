"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import firstImage from "/public/1.png";
import secondImage from "/public/2.png";
import thirdImage from "/public/3.png";
import clsx from "clsx";

const data = [firstImage, secondImage, thirdImage];
const NO_OF_IMAGES = data.length - 1;
const INTERVAL_TIME = 10000;

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setIndex((prevIndex) => (prevIndex === NO_OF_IMAGES ? 0 : prevIndex + 1));
  }, []);


  const handleMouseEnter = useCallback(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    intervalId.current = setInterval(handleNext, INTERVAL_TIME);
  }, [handleNext]);

  useEffect(() => {
    intervalId.current = setInterval(handleNext, INTERVAL_TIME);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [handleNext]);

  return (
    <section
    id="home"
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={data[index]}
        alt="Image"
        className="w-full h-[320px] md:h-[475px] object-cover"
      />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.map((_, i) => {
          return (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={clsx(
                "cursor-pointer bg-gray-300 w-11 h-1 transition-colors duration-300",
                i === index ? "bg-white" : "bg-gray-300"
              )}
            ></span>
          );
        })}
      </div>
    </section>
  );
};
