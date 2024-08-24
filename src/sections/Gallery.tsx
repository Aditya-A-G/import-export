import Image from "next/image";
import firstImage from "/public/1.png";
import secondImage from "/public/2.png";
import thirdImage from "/public/3.png";
import fourthImage from "/public/4.png";

export const Gallery = () => {
  return (
    <section className="md:grid grid-cols-2">
      <div className="overflow-clip">
        <div className=" relative transform hover:scale-110 transition-transform duration-300">
          <Image src={firstImage} alt="product" />
          <div className="absolute inset-0 m-auto md:w-10/12 lg:w-2/5 text-center flex justify-center items-center text-white text-3xl font-extrabold">
            ALWAYS THE PERFECT PORTION
          </div>
        </div>
      </div>

      <div className="overflow-clip">
        <div className="relative transform hover:scale-110 transition-transform duration-300">
          <Image src={secondImage} alt="product" />
          <div className="absolute inset-0 m-auto md:w-10/12 lg:w-2/5 text-center flex justify-center items-center text-white text-3xl font-extrabold">
            TOP REASONS WHY CHEFS LOVE US
          </div>
        </div>
      </div>

      <div className="overflow-clip">
        <div className="relative transform hover:scale-110 transition-transform duration-300">
          <Image src={thirdImage} alt="product" />
          <div className="absolute inset-0 m-auto md:w-10/12 lg:w-2/5 text-center flex justify-center items-center text-white text-3xl font-extrabold">
            INNOVATION CENTRE
          </div>
        </div>
      </div>

      <div className="overflow-clip">
        <div className="relative transform hover:scale-110 transition-transform duration-300">
          <Image src={fourthImage} alt="product" />
          <div className="absolute inset-0 m-auto md:w-10/12 lg:w-2/5 text-center flex justify-center items-center text-white text-3xl font-extrabold">
            GREEN CATERING
          </div>
        </div>
      </div>
    </section>
  );
};
