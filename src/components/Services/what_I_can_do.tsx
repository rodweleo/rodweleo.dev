const Abilities = () => {
  return (
    <section className="w-2/6 h-fit">
      <h1 className="text-white/70">What Can I do For You?</h1>
      <p className="text-white/60 text-xl">
        It is easier to entrust your work to the expert because they are able to
        produce the best quality of results.
      </p>
      <section className="grid grid-cols-2 w-fit gap-5">
        <div className="w-fit">
          <span className="text-yellow-600 text-2xl font-bold">5+</span>
          <p className="text-white/60">Projects Completed</p>
        </div>
        <div>
          <span className="text-yellow-600 text-2xl font-bold">100+</span>
          <p className="text-white/60">Community Network</p>
        </div>
        <div>
          <span className="text-yellow-600 text-2xl font-bold">30+</span>
          <p className="text-white/60">Companies + Individuals Satisfied.</p>
        </div>

        <div>
          <span className="text-yellow-600 text-2xl font-bold">3+</span>
          <p className="text-white/60">Years of Experience</p>
        </div>
      </section>
    </section>
  );
};

export default Abilities;
