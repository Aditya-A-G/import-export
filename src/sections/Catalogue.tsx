export const Catalogue = () => {
  return (
    <section id="catalogue" className="bg-catalogue w-full bg-no-repeat bg-cover h-[500px] bg-center flex flex-col items-center px-5 py-8 md:py-16 lg:py-20 gap-10">
      <div className="w-full lg:w-2/5 border-b-8 border-white py-5 flex justify-center items-center md:w-1/2">
        <h3 className="[text-shadow:_0_2px_4px_#333332] text-white text-3xl lg:text-4xl  font-extrabold text-center">
          Browse Our Catalogue
        </h3>
      </div>
      <div className="w-2/3 md:w-1/3 lg:w-1/4">
        <div>
          <button className="bg-black text-white w-full h-16 md:h-20 hover:bg-[#4DAEC2]">
            <a href="/AbdulAziz_Catalogue.pdf">UAE</a>
          </button>
        </div>
      </div>
    </section>
  );
};
