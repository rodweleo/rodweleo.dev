const About = () => {
  return (
    <section className="h-screen p-5 text-center">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl xsm:text-2xl sm:text-3xl text-white">
          ABOUT <span className="text-blue-500">ME</span>
        </h2>
        <p className="text-white leading-loose w-3/4">
          My name is Rodwell Leo and I'm a{" "}
          <b className="text-blue-500">software engineer</b>. With{" "}
          <b className="text-blue-500">3+ years of experience</b> as a
          professional Software Engineer, I have acquired the necessary skills
          to build great software applications from web to mobile applications.
        </p>
        <button className="w-fit bg-blue-500 text-white py-2 px-5 rounded-md">
          DOWNLOAD CV
        </button>
      </div>
    </section>
  );
};

export default About;
