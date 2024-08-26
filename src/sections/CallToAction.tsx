export const CallToAction = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-10">
      <div className="text-3xl md:text-4xl lg:text-7xl font-bold text-center w-10/12">
        <h2>What are you waiting for?</h2>
        <h2>Get in touch with us now.</h2>
      </div>
      <div className="w-2/3 md:w-7/12 lg:w-2/5 flex flex-col md:flex-row gap-7 mt-10">
        <button className="w-full bg-black text-white py-9 md:py-8  lg:py-9 font-bold hover:bg-[#4DAEC2]">
          <a href="mailto:aarfoodstufftrading@gmail.com">BECOME A SUPPLIER</a>
        </button>
        <button className="w-full bg-black text-white py-9 md:py-8 lg:py-9 font-bold hover:bg-[#4DAEC2]">
          <a href="mailto:aarfoodstufftrading@gmail.com">BECOME A CUSTOMER</a>
        </button>
      </div>
    </section>
  );
};
