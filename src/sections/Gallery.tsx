import Image from "next/image";
import salmon from "/public/fishs/fresh-raw-salmon.png";
import lobster from "/public/fishs/lobster.png";
import prawns from "/public/fishs/prawns.png";
import rawSalmon from "/public/fishs/raw-salmon.png";

export const Gallery = () => {
  return (
    <section className="md:grid grid-cols-2 ">
      <div className="overflow-clip">
        <div className=" relative transform hover:scale-110 transition-transform duration-300 h-full">
          <Image
            src={salmon}
            alt="product"
            className="object-cover h-full"
            quality={100}
          />
          <div className="[text-shadow:_0_2px_4px_#333332] absolute inset-0 m-auto md:w-10/12 lg:w-2/5 text-center flex justify-center items-center text-white drop-shadow-2xl 2px 2px 5px] text-3xl font-extrabold">
            Premium Quality Seafood Selection
          </div>
        </div>
      </div>

      <div className="overflow-clip">
        <div className="relative transform hover:scale-110 transition-transform duration-300 h-full">
          <Image
            src={lobster}
            alt="product"
            className="object-cover h-full"
            quality={100}
          />
          <div className="[text-shadow:_0_2px_4px_#333332] absolute inset-0 m-auto md:w-10/12 lg:w-2/5 text-center flex justify-center items-center text-white text-3xl font-extrabold">
            Exquisite Lobster Delicacies
          </div>
        </div>
      </div>

      <div className="overflow-clip">
        <div className="relative transform hover:scale-110 transition-transform duration-300 h-full">
          <Image
            src={prawns}
            alt="product"
            className="object-cover h-full"
            quality={100}
          />
          <div className="[text-shadow:_0_2px_4px_#333332] absolute inset-0 m-auto md:w-10/12 lg:w-2/5 text-center flex justify-center items-center text-white text-3xl font-extrabold">
            Fresh Catches, Perfectly Served
          </div>
        </div>
      </div>

      <div className="overflow-clip">
        <div className="relative transform hover:scale-110 transition-transform duration-300 h-full">
          <Image
            src={rawSalmon}
            alt="product"
            className="object-cover h-full"
            quality={100}
          />
          <div className="[text-shadow:_0_2px_4px_#333332] absolute inset-0 m-auto md:w-10/12 lg:w-2/5 text-center flex justify-center items-center text-white text-3xl font-extrabold">
            Sustainable and Delicious Choices
          </div>
        </div>
      </div>
    </section>
  );
};
