import { Link } from "react-router-dom";
import { SocialLinks } from "./social_links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-800/20 p-5 flex flex-col justify-center gap-5 w-full bottom-0">
      <section className="space-y-2">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Rodwell Leo" height="30" width="30" />
          &nbsp;
          <h2 className="text-white text-xl font-bold">
            rodwe<span className="text-blue-400">leo</span>
          </h2>
        </div>

      </section>
      <ul className="text-white/40 font-bold leading-10 flex space-x-4 justify-center">
        <Link to="/">Home</Link>
        <Link to="experience">Experience</Link>
        <Link to="contact-me">Contact Me</Link>
      </ul>
      <hr />
      <section className="flex flex-col items-center w-full space-y-6">
        <div className="leading-loose w-fit space-y-1">
          <p className="text-white/40 font-bold">
            Follow me on social media:
          </p>
          <SocialLinks />

        </div>
        <p className="text-center text-slate-300 font-bold">&copy; {`Rodwell Leo ${year}`}. All Rights Reserved </p>
      </section>
    </footer>
  );
}
