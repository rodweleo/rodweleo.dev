import { Link } from "react-router-dom";
import { SocialLinks } from "../components/social_links";
import { Button } from "../components/ui/button";

export default function Hero() {

  const titles = [
    "software engineer",
    "full stack developer"
  ]



  return (
    <section
      id="about-leo"
      className="w-full p-5 min-h-screen flex flex-col justify-center text-center items-center">
      <div className="flex flex-col space-y-10">
        <h1 className="text-white text-2xl">
          <p className="text-[18px] text-white/80 bg-slate-700/50 rounded-full px-8 py-2 w-fit animate-pulse">
            Hello&#128075;, I'm
            <span className="text-blue-500 font-bold"> &nbsp;Rodwell Leo</span>
          </p>{" "}
        </h1>
        <h2 className="w-full text-left text-white font-bold text-4xl">About Me</h2>
        <p className="text-white/80 leading-8 text-justify text-lg font-bold sm:w-[700px]">
          As an <strong className="text-blue-500">indie {titles[0]}</strong>, my focus is on creating groundbreaking Software as a Service (SaaS) solutions that redefine industry standards. I am driven by a profound passion for software craftsmanship and product innovation, consistently striving to exceed the needs and expectations of users by leveraging technology to solve complex problems and create tangible value for businesses and individuals alike.
          <br />
          Seeking a partner who shares your vision for innovation and excellence in SaaS development? Look no further. Let's collaborate and build something extraordinary that leaves a lasting impact.
        </p>
        <SocialLinks />

        <div className="flex gap-5">
          <Button
            options={{
              variant: "secondary",
              children: <a href="/downloads/Rodwell Leo's Resume.pdf" target="_blank" className="flex gap-2">
                <i className="fa-solid fa-download"></i>Download Resume
              </a>
            }}
          />
          <Button
            options={{
              variant: "secondary",
              children: <Link to="contact-me" > <i className="fa-regular fa-message"></i> Contact Me</Link>
            }}
          />

        </div>
      </div>
    </section>
  );
}
