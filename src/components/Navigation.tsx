import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {

  const [openNav, setOpenNav] = useState(false)
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
      <ul className="flex items-center gap-5">
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
