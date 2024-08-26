import Image from "next/image";
import facebookLogo from "/public/facebook.png";
import instagramLogo from "/public/instagram.png";
import linkedinLogo from "/public/linkedin.png";

export const Footer = () => {
  return (
    <footer className="mt-16">
      <div className=" flex flex-col md:flex-row w-full justify-between items-center md:px-16  ">
        <div className="w-2/3 md:w-1/3 text-center md:text-start  md:text-lg">
        Waterfront Market Wholesale, Deira Dubai
        </div>

        <div className="w-11/12 md:w-1/3 grid place-items-center md:place-items-start mt-6 gap-6">
          <div className="flex flex-col">
            <a className="underline">+971 52 2148 918</a>
            <a href="mailto:aarfoodstufftrading@gmail.com" className="underline">
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
        <div className="hidden lg:flex justify-center items-center">
          <button>
            <a href="#top">Top</a>
          </button>
        </div>
      </div>

      <div className="p-5 mt-10 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-600">
        <span>Greenhouse Foodstuff Trading LLC</span>
        <span>Culinary innovation by your side.</span>
        <span>Copyright 2018</span>
      </div>
    </footer>
  );
};
