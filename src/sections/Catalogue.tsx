export const Catalogue = () => {
  return (
    <section className="bg-catalogue w-full bg-no-repeat bg-cover h-[500px] flex flex-col items-center px-5 py-8 md:py-16 lg:py-20 gap-10">
      <div className="w-full border-b-8 border-white py-5 flex justify-center items-center md:w-1/2">
        <h3 className="text-white text-3xl lg:text-4xl  font-extrabold">
          Browse Our Catalogue
        </h3>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/3">
        <div>
          <button className="bg-black text-white w-full h-24 md:h-20 hover:bg-[#4DAEC2]">
            UAE
          </button>
        </div>
      </div>
    </section>
  );
};
