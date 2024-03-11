import { Link } from "react-router-dom";
import { SocialLinks } from "../components/social_links";

export default function Hero() {
  return (
    <section
      id="about-leo"
      className="p-5 w-full min-h-screen flex flex-col justify-center text-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-white text-2xl ">
          <p className="text-white/80 bg-slate-700/50 rounded-full px-12 py-4">
            Hello, I'm
            <span className="text-blue-500 font-bold"> Rodwell Leo</span>
          </p>{" "}
        </h1>
        <p className="text-white/80 leading-loose text-3xl font-bold">
          Experienced <b className="text-blue-500">software engineer</b> with a focus on full-stack development and  mobile development.
        </p>
        <div className="flex space-x-5 flex-wrap justify-center items-center gap-5">
          <div className="flex w-fit">
            <p className="bg-slate-400 rounded-l-full p-5 font-bold text-2xl">
              +2.5
            </p>
            <p className="border border-slate-400 rounded-r-full text-slate-400 text-2xl p-5">
              Years of Experience
            </p>
          </div>

          <div className="flex w-fit">
            <p className="bg-slate-400 rounded-l-full p-5 font-bold text-2xl">
              100K
            </p>
            <p className="border border-slate-400 rounded-r-full text-slate-400 text-2xl p-5">
              Lines of Code Written
            </p>
          </div>

          <div className="flex w-fit ">
            <p className="bg-slate-400 rounded-l-full w-fit p-5 font-bold text-2xl">
              +2.5
            </p>
            <p className="border border-slate-400 rounded-r-full text-slate-400 text-2xl p-5">
              Years of Experience
            </p>
          </div>
        </div>
        <SocialLinks />

        <div className="flex flex-wrap  items-center justify-center gap-5">
          <a href="" download className=" shadow-md shadow-slate-800 border border-slate-400 bg-white font-bold px-10 py-5 rounded-full flex gap-2 items-center">
            <i className="fa-solid fa-file-lines"></i>Download Resume
          </a>
          <Link to="contact-me" className="border border-slate-400 text-white font-bold px-10 py-5 rounded-full flex gap-2 items-center hover:bg-slate-400 transition-all duration-300"> <i className="fa-regular fa-message"></i> Contact Me</Link>
        </div>
      </div>
    </section>
  );
}
