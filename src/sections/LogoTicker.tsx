"use client";
import acmeLogo from "/public/logo-acme.png";
import quantumLogo from "/public/logo-quantum.png";
import echoLogo from "/public/logo-echo.png";
import celestialLogo from "/public/logo-celestial.png";
import pulseLogo from "/public/logo-pulse.png";
import apexLogo from "/public/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div id="brands" className="py-8 md:py-12 bg-white flex justify-center">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="QuantumLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="EchoLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="PulseLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="ApexLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="QuantumLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="EchoLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="PulseLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="ApexLogo Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
