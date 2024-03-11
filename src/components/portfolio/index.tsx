const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col w-full h-[50vh] p-5 gap-2 items-center">
      <h1 className="text-white">Portfolio</h1>
      <section className="grid grid-cols-2 gap-20 place-items-center w-fit">
        <div className="w-fit">
          <span className="text-blue-500 text-5xl font-bold text-center">
            5+
          </span>
          <p className="text-white">Projects Completed</p>
        </div>
        <div className="w-auto">
          <span className="text-blue-500 text-5xl font-bold text-center">
            50+
          </span>
          <p className="text-white">Community Network</p>
        </div>
        <div className="w-auto">
          <span className="text-blue-500 text-5xl font-bold text-center">
            30+
          </span>
          <p className="text-white">Customers Satisfied.</p>
        </div>

        <div className="w-auto">
          <span className="text-blue-500 text-5xl font-bold text-center">
            3+
          </span>
          <p className="text-white">Years of Experience</p>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
