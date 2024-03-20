import { Link } from "react-router-dom";
import { SocialLinks } from "../components/social_links";

export default function Hero() {
  const Portfolio = [
    {
      content: "2.5+",
      description: "Years of experience"
    }
  ]

  const titles = [
    "software engineer",
    "full stack developer"
  ]



  return (
    <section
      id="about-leo"
      className="p-5 w-full min-h-screen flex flex-col justify-center text-center items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-white text-2xl">
          <p className="text-[18px] text-white/80 bg-slate-700/50 rounded-full px-8 py-2 w-fit animate-pulse">
            Hello&#128075;, I'm
            <span className="text-blue-500 font-bold"> &nbsp;Rodwell Leo</span>
          </p>{" "}
        </h1>
        <p className="text-white/80 leading-8 text-justify text-lg font-bold sm:w-[700px]">
          An <b className="text-blue-500">indie {titles[0]}</b> focusing on building innovative SaaS (Software as a Service) solutions.
          <br />I'm passionate about crafting software and creating products that not only meet but exceed the needs and expectations of its users.
        </p>
        <div className="flex flex-wrap space-x-2">
          {Portfolio.map((portfolio, index: number) => (
            <div className="flex border border-slate-400 rounded-full" key={index}>
              <p className="bg-slate-400 rounded-l-full p-2 font-bold text-2xl text-center">
                {portfolio.content}
              </p>
              <p className="rounded-r-full text-slate-400 text-2xl p-2">
                {portfolio.description}
              </p>
            </div>
          ))}

        </div>
        <SocialLinks />

        <div className="flex flex-wrap  gap-5">

          <Link to="contact-me" className="border border-slate-400 text-white font-bold px-9 py-3 rounded-full flex gap-2 items-center hover:bg-slate-400 transition-all duration-300"> <i className="fa-regular fa-message"></i> Contact Me</Link>
          <a href="/downloads/Rodwell Leo's Resume.pdf" target="_blank" className=" shadow-md shadow-slate-800 border border-slate-400 bg-white font-bold px-9 py-3 rounded-full flex gap-2 items-center text-black">
            <i className="fa-solid fa-download"></i>Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
