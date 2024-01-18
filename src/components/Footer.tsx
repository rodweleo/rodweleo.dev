import { Link } from "react-router-dom";
import { SocialLinks } from "./social_links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-800/20 p-5 flex flex-col gap-5 w-full bottom-0">
      <h2 className="text-white text-4xl">
        rodwe<span className="text-blue-400">leo</span>
      </h2>
      <section className="flex flex-wrap justify-between">
        <div>
          <h2 className="text-xl text-white">Portfolio</h2>
          <ul className="text-white/40 leading-10 flex flex-col ">
            <a href="#about-leo">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#projects">Projects</a>
            <a href="#contact-me">Contact</a>
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-white">Resources</h2>
          <ul className="text-white/40 leading-loose">
            <li>
              <Link to="https://www.github.com/rodweleo" target="_blank">
                Github
              </Link>
            </li>
          </ul>
        </div>
        <div className="leading-loose">
          <h2 className="text-xl text-white">Social Media</h2>
          <p className="text-white/40">
            Follow me on social media for more content.
          </p>
          <SocialLinks />
        </div>
      </section>
      <hr />
      <div className="text-white flex flex-wrap-reverse justify-center text-white/40 w-full gap-7">
        <p>&copy; {`Rodwell Leo ${year}`}. All Rights Reserved </p>
        <ul className="flex gap-5 ">
          <li>
            <a href="">Terms </a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
