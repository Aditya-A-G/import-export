"use client";
import { Dispatch, SetStateAction } from "react";

export const Accordion = ({
  item,
  show,
  setShowLocation,
  setSelectedLocation,
  index,
  isDesktop,
}: {
  item: { name: string; location: string };
  show: boolean;
  setShowLocation: Dispatch<SetStateAction<boolean[]>>;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
  index: number;
  isDesktop: boolean;
}) => {
  return (
    <div
      className=" cursor-pointer"
      onClick={() => {
        setShowLocation((prevLocations) => {
          return prevLocations.map((_, i) => i === index);
        });
        setSelectedLocation(item.location);
      }}
    >
      <div className="border border-black relative h-16 flex items-center px-3">
        <h3>{item.name}</h3>
        <span className="absolute right-3 text-2xl top1/2">
          {show ? "-" : "+"}
        </span>
      </div>

      {!isDesktop && show && (
        <iframe
          src={item.location}
          className="border-0 w-full lg:w-svw h-72 lg:h-[450px] md:h-72"
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};
