const data = [
  "Structure expansion based on category management",
  "Strong and professional presence at the retail and food service markets.",
  "Embracing diversity with over 20 nationalities to reciprocate our clients’ cultural diversity and heritage",
  "Dedicated business units servicing specific channels of distribution & client categories.",
];

export const CompanyPillars = () => {
  return (
    <section className="mt-10 md:mt-4 lg:mt-16">
      <div className="bg-gray-300 md:bg-white py-6 h-64 flex justify-center items-center">
        <div className="w-11/12 md:w-2/3 lg:w-3/5 text-center relative py-6">
          <span className="hidden md:inline-block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 bg-gray-300 w-2/3 h-5/4 z-0"></span>
          <h2 className="font-extrabold text-3xl lg:text-5xl lg:tracking-tight md:leading-none relative z-10">
            &quot;Greenhouse’s unique service & added value originates from four
            pillars constituting its market strength.&quot;
          </h2>
          <div className="mt-4 lg:mt-6 font-extrabold relative z-10">
            COMPANY PILLARS
          </div>
        </div>
      </div>
      <div className="px-5 mt-8 md:mt-1 lg:mt-20 text-lg grid lg:grid-cols-4 gap-3 ">
        {data.map((value, index) => {
          return <div key={index}>{`0${index + 1}. ${value}`}</div>;
        })}
      </div>
    </section>
  );
};
