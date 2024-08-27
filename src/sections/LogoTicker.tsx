"use client";

import theCatchLogo from "/public/clients/the_catch.png";
import dampaLogo from "/public/clients/dampa.png";
import seaBrillLogo from "/public/clients/sea_brill.png";
import shrimpPotLogo from "/public/clients/shrimp_pot.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div id="brands" className="py-4 md:py-8 bg-white flex justify-center">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={theCatchLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={dampaLogo}
              alt="QuantumLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={seaBrillLogo}
              alt="EchoLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={shrimpPotLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={theCatchLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={dampaLogo}
              alt="QuantumLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={seaBrillLogo}
              alt="EchoLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={shrimpPotLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={theCatchLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={dampaLogo}
              alt="QuantumLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={seaBrillLogo}
              alt="EchoLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={shrimpPotLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={theCatchLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={dampaLogo}
              alt="QuantumLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={seaBrillLogo}
              alt="EchoLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
            <Image
              src={shrimpPotLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
              quality={100}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
