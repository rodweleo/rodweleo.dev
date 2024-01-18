import { SocialLinks } from "../components/social_links";

export default function Hero() {
  return (
    <section
      id="about-leo"
      className="p-5 w-full h-screen flex flex-col justify-center">
      <div className="max-w-96 flex flex-col gap-5 -z-0">
        <h1 className="text-white text-2xl ">
          <p className="text-white/80">
            Hello, My name is <br />{" "}
            <span className="text-blue-500 text-6xl"> Rodwell Leo</span>
          </p>{" "}
        </h1>
        <p className=" text-2xl text-white">Software Engineer</p>
        <p className="text-white/80 leading-loose">
          With <b className="text-blue-500">3+ years of experience</b> as a
          professional Software Engineer, I have acquired the necessary skills
          to build great software applications from web to mobile applications.
        </p>
        <SocialLinks />
      </div>
    </section>
  );
}
