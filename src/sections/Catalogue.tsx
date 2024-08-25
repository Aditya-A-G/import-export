export const Catalogue = () => {
  return (
    <section className="mt-7 md:mt-10 bg-catalogue h-[790px] md:h-[577px] lg:h-[645px] flex flex-col items-center px-5 py-8 md:py-16 lg:py-20 gap-10">
      <div className="w-full border-b-8 border-white py-5 flex justify-center items-center md:w-1/2">
        <h3 className="text-white text-3xl lg:text-4xl  font-extrabold">
          Browse Our Catalogue
        </h3>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2">
        <div className="grid md:grid-cols-2 gap-5 md:gap-8 lg:gap-10">
          <button className="bg-black text-white w-full h-24 md:h-20 hover:bg-[#4DAEC2]">
            UAE
          </button>
          <button className="bg-black text-white w-full h-24 md:h-20 hover:bg-[#4DAEC2]">
            OMAN
          </button>
          <button className="bg-black text-white w-full h-24 md:h-20 hover:bg-[#4DAEC2]">
            SAUDI ARABIA
          </button>
          <button className="bg-black text-white w-full h-24 md:h-20 hover:bg-[#4DAEC2]">
            QATAR
          </button>
          <button className="bg-black text-white w-full h-24 md:h-20 hover:bg-[#4DAEC2]">
            CATERING
          </button>
        </div>
      </div>
    </section>
  );
};
