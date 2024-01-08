const Portfolio = () => {
  return (
    <section className="flex flex-wrap gap-5 justify-around items-center place-content-center h-[25vh]">
      <div className="w-fit">
        <span className="text-blue-500 text-5xl font-bold text-center">5+</span>
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
        <span className="text-blue-500 text-5xl font-bold text-center">3+</span>
        <p className="text-white">Years of Experience</p>
      </div>
    </section>
  );
};

export default Portfolio;
