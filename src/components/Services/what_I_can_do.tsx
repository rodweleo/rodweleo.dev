const Abilities = () => {
  return (
    <section className="w-auto h-fit flex flex-col gap-5">
      <h1 className="text-white">What Can I do For You?</h1>
      <p className="text-white text-xl">
        It is easier to entrust your work to the expert because they are able to
        produce the best quality of results.
      </p>
      <section className="grid grid-cols-2 w-fit gap-5">
        <div className="w-fit">
          <span className="text-blue-200 text-2xl font-bold">5+</span>
          <p className="text-white">Projects Completed</p>
        </div>
        <div>
          <span className="text-blue-200 text-2xl font-bold">100+</span>
          <p className="text-white">Community Network</p>
        </div>
        <div>
          <span className="text-blue-200 text-2xl font-bold">30+</span>
          <p className="text-white">Companies + Individuals Satisfied.</p>
        </div>

        <div>
          <span className="text-blue-200 text-2xl font-bold">3+</span>
          <p className="text-white">Years of Experience</p>
        </div>
      </section>
    </section>
  );
};

export default Abilities;
