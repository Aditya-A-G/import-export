"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

import quoteIcon from "/public/quote-icon.jpg";
import clsx from "clsx";

const INTERVAL_TIME = 3000;

const data = [
  "On behalf of L’Artisan Gourmand, I would like to thank you all, especially Chef Sebastien & Chef Wafa along with the coordination of Raj for the demo provided in our kitchen.",
  "We were pleased to host the 2 superstars of Greenhouse and appreciated the techniques and advice shared with our team.",
  "Greenhouse has always been a great support in our daily operation as one of our main supplier. Once again thank you very much.",
  "From the beginning everything has been at the top level with greenhouse. The team has been very supportive at all times regarding delivery timings, changes on the menu, pricing in general and operations overall. Thank you so much for your continuous support!",
  "I hope this email finds you well. I am writing to express my sincere appreciation for the wonderful croissants you provided for the recent event hosted by Hadero Coffee at the Odoo Office. The event was a tremendous success, with over 200 attendees enjoying your delicious pastries and our coffee.",
  "Hello world, I'm here"
];

const Testimonial = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className={clsx("w-10/12 flex flex-col", className)}>
      <Image src={quoteIcon} alt="quote icon" />
      <div className="mt-5">Donald Trump - Operations Team Lead</div>
      <h5 className="font-bold mt-5">Roberto&apos;s Group</h5>
      <p className="mt-5">{text}</p>
    </div>
  );
};

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    setIndex((prevIndex) =>
      isMobile ? (prevIndex + 1) % data.length : (prevIndex + 3) % data.length
    );
  }, []);

  const handlePrevious = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    setIndex((prevIndex) =>
      isMobile
        ? (prevIndex - 1 + data.length) % data.length
        : (prevIndex - 3 + data.length) % data.length
    );
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
    <section className="mt-4">
      <div className="flex flex-col justify-center items-center gap-5">
        <h4 className="text-3xl font-extrabold">Testimonials</h4>
        <div className="font-bold ">CUSTOMER REFERENCES</div>
      </div>
      <div
        className="w-full h-[600px] flex justify-center items-start mt-16 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute top-1/3 left-2 cursor-pointer"
          onClick={handlePrevious}
        >
          {"<"}
        </div>
        <div className="flex justify-center gap-5 w-full md:w-3/4">
          <Testimonial text={data[index]} />
          <Testimonial
            text={data[(index + 1) % data.length]}
            className="hidden md:block"
          />
          <Testimonial
            text={data[(index + 2) % data.length]}
            className="hidden md:block"
          />
        </div>
        <div
          className="absolute top-1/3 right-2 cursor-pointer"
          onClick={handleNext}
        >
          {">"}
        </div>
      </div>
    </section>
  );
};
