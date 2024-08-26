import Image from "next/image";
import logo from "/public/logo.png";
import menuIcon from "/public/menu-icon.png";

export const Header = () => {
  return (
    <header id="top">
      <div className="flex justify-center py-2.5 bg-[#39b54a]">
        <div className="font-medium tracking-tighter text-sm">
          Click here to download our catalogue{" "}
        </div>
      </div>

      <div className="flex h-16 cursor-pointer">
        <div className="flex-grow flex justify-center items-center">
          <Image src={logo} alt="logo" />
        </div>
        <div className="bg-black w-16 md:w-28 flex justify-center items-center ">
          <Image src={menuIcon} alt="Menu icon" />
        </div>
      </div>
    </header>
  );
};
