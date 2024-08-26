const data = [
  {
    name: "Dubai",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.364432673707!2d55.32184892625848!3d25.291957177650122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b58524192c5%3A0x1df225a0347f3c8e!2sWaterfront%20Market!5e0!3m2!1sen!2sin!4v1724675969325!5m2!1sen!2sin",
  },
];

export const Location = () => {
  return (
    <section id="location" className="bg-[#e6e7e8]">
      <div className="border border-gray-400 py-6 h-[169px] md:h-56 lg:h-64 flex justify-center items-center">
        <div className="w-11/12 text-center py-6">
          <h2 className="font-extrabold text-3xl lg:text-4xl">Find us Here</h2>
          <div className="mt-4 font-extrabold">OUR LOCATION</div>
        </div>
      </div>

      <div className="w-full">
        <div className="border-b border-gray-400 h-16 flex justify-center items-center">
          <h3>{data[0].name}</h3>
        </div>

        <iframe
          src={data[0].location}
          className="border-0 w-full h-72 lg:h-[450px] md:h-72"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
