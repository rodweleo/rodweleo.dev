import { useId } from "react";
import Services from "../components/Services/index";
import Hero from "./hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Homepage = () => {
  const homeNavId = useId()
  const homeNavContainerId = useId()

  const homeNav = document.getElementById(homeNavId);
  const homeNavContainer = document.getElementById(homeNavContainerId);

  const handleClick = () => {
    homeNav?.classList.add("hidden")
    homeNav?.classList.remove("flex")
    homeNavContainer?.getElementsByClassName("fa-close")[0].classList.add("hidden")
  }

  const openHomeNav = () => {
    homeNav?.classList.remove("hidden")
    homeNav?.classList.add("flex")
    homeNavContainer?.getElementsByClassName("fa-close")[0].classList.remove("hidden")
  }
  return (
    <main className="w-full relative">
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <div id={homeNavContainerId} className="w-fit fixed bg-slate-800 top-1/2 left-0 h-fit flex-col p-2.5 justify-center gap-6 text-slate-300 rounded-r-md hidden">
        <i className="fa-solid fa-bars text-white absolute hidden cursor-pointer rounded-r-full" onClick={() => openHomeNav()}></i>
        <i className="fa-solid fa-close absolute right-[-30px] top-[-30px] hover:bg-slate-700 rounded-full p-2 cursor-pointer" onClick={() => handleClick()}></i>
        <ul id={homeNavId} className="flex-col gap-5 z-50 hidden">
          <li><a href="#skills"><i className="fa-solid fa-laptop-code"></i> Skills</a></li>
          <li><a href="#services"><i className="fa-solid fa-briefcase"></i> Services</a></li>
          <li><a href="#projects"><i className="fa-solid fa-hammer"></i> Projects</a></li>
        </ul>
      </div>
    </main>
  );
};

export default Homepage;
