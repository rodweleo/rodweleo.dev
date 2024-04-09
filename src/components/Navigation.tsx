import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {

  const [openNav, setOpenNav] = useState(true)
  const navLinks = document.getElementsByClassName("nav-link");
  for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];
    navLink.addEventListener("click", () => {
      setOpenNav(false)
    })
  }
  return (
    <nav className="flex gap-5 transition-all duration-300 sticky h-fit">
      <button onClick={() => setOpenNav(!openNav)}><i className={`fa-solid fa-${openNav ? 'close' : "bars"} transition-all duration-300 text-white hidden cursor-pointer scale-125 max-md:flex`}></i></button>
      <ul className={`max-md:w-full max-md:items-center max-md:overflow-y-auto flex gap-10 max-md:fixed ${openNav ? "max-md:right-0" : "max-md:right-full"} transition-all duration-300 max-md:w-full max-md:bg-slate-800  max-md:top-20 max-md:h-screen max-md:flex max-md:flex-col max-md:justify-start max-md:space-y-10`}>
        <li>
        <NavLink to="/" className="nav-link" >
        <i className="fa-solid fa-home hidden"></i>
        Home
      </NavLink >
        </li>
      
      <li>
      <NavLink to="experience" className="nav-link">
        <i className="fa-solid fa-briefcase hidden"></i>
        Experience
      </NavLink>
      </li>
      <li>
      <NavLink to="projects" className="nav-link">
        <i className="fa-solid fa-tools hidden"></i>
        Projects
      </NavLink>
      </li>
      <li>
      <NavLink to="blog" className="nav-link">
        <i className="fa-solid fa-file-lines hidden"></i>
        Blog
      </NavLink>
      </li>
      <li>
      <NavLink to="contact-me" className="nav-link">
        <i className="fa-solid fa-phone hidden"></i>
        Contact
      </NavLink>
      </li>
      </ul>
    </nav>
  );
};
