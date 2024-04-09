import { NavLink } from "react-router-dom";
import {SubscribeForm} from "./SubscribeForm";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-800/20 p-5 flex flex-col justify-center gap-5 w-full bottom-0">
      <section className="flex flex-wrap justify-center gap-20">
        <section className="max-w-md">
          <div className="flex items-center justify-center">
            <img src="/images/logo.png" alt="Rodwell Leo" height="30" width="30" />
            &nbsp;
            <h2 className="text-white text-xl font-bold">
              rodwe<span className="text-blue-400">leo</span>
            </h2>
          </div>
          <p className="text-slate-400 font-bold text-justify leading-loose italic">"Crafting Code, Building Tomorrow".</p>
        </section>
        <SubscribeForm />
        <div>
          <h2 className="text-white font-bold">Quick Links</h2>
          <hr />
          <ul className="text-slate-300 gap-5 flex divide-slate-700 font-bold leading-10 justify-center">
            <li><NavLink to="/" className="flex items-center gap-1">Home</NavLink></li>
            <li><NavLink to="experience" >Experience</NavLink></li>
            <li><NavLink to="projects" >Projects</NavLink></li>
            <li><NavLink to="blog" >Blog</NavLink></li>
            <li><NavLink to="contact-me">Contact Me</NavLink></li>
          </ul>
        </div>
        
      </section>
      
      <hr />
      <p className="text-center text-slate-300 font-bold">&copy; {`Rodwell Leo ${year}`}. All Rights Reserved </p>
    </footer>
  );
}
