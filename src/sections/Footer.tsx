import Image from "next/image";
import facebookLogo from "/public/facebook.png";
import instagramLogo from "/public/instagram.png";
import linkedinLogo from "/public/linkedin.png";
import upArrow from "/public/arrow.png";

export const Footer = () => {
  return (
    <footer id="contact" className="mt-10 border-t border-gray-300 py-5">
      <div className=" flex flex-col md:flex-row w-full justify-between items-center md:px-16   ">
        <div className="w-2/3 md:w-1/3 text-center md:text-start  md:text-lg">
          <div className="font-bold">Address :</div>
          Waterfront Market Wholesale, Deira Dubai
        </div>

        <div className="w-11/12 md:w-1/3 grid place-items-center md:place-items-start mt-6 gap-6">
          <div className=" text-center flex flex-col md:text-start">
            <a className="underline">+971 52 2148 918</a>
            <a
              href="mailto:aarfoodstufftrading@gmail.com"
              className="underline"
            >
              aarfoodstufftrading@gmail.com
            </a>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-5">
            <span className="font-bold">Follow Us</span>
            <div className="flex gap-5">
              <Image src={facebookLogo} alt="facebook logo" className="w-16" />
              <Image
                src={instagramLogo}
                alt="instagram logo"
                className="w-16"
              />
              <Image src={linkedinLogo} alt="linkedin logo" className="w-16" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center ">
          <a href="#home">
            <button className="flex justify-center items-center gap-1">
              <Image src={upArrow} alt="up arrow" className="w-10" />
              Top
            </button>
          </a>
        </div>
      </div>

      <div className="p-5 mt-10 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-600">
        <span>Abdul Aziz Rahim Food Stuff Trading LLC</span>
        <span>Your Trusted Partner in Freshness</span>
        <span>Copyright 2024</span>
      </div>
    </footer>
  );
};
