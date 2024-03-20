import { NavLink } from "react-router-dom";

export const NavBar = () => {

  const mainNavBar = document.getElementById("main-nav-bar")
  const handleClick = () => {
    mainNavBar?.classList.add("max-md:right-full")
    mainNavBar?.classList.add("max-md:right-0")
  }

  const navLinks = document.getElementsByClassName("nav-link");
  for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];

    navLink.addEventListener("click", () => {
      mainNavBar?.classList.add("max-md:right-full")
      mainNavBar?.classList.add("max-md:right-0")
    })
  }
  return (
    <nav id="main-nav-bar" className="relative max-md:bg-slate-800 max-md:fixed max-md:top-0 max-md:h-screen max-md:w-full max-md:right-full transition-all duration-300">
      <i
        className="fa-solid fa-close text-white scale-150 right-0 mt-8 mr-5 cursor-pointer z-50 hidden max-md:absolute max-md:block"
        onClick={() => handleClick()}
      ></i>
      <ul className="flex list-none gap-5 max-md:flex-col items-center justify-center h-full max-md:space-y-10">
        <li><NavLink to="/" className="nav-link">
          <i className="fa-solid fa-home"></i> Home
        </NavLink></li>
        <li><NavLink to="experience" className="nav-link">
          <i className="fa-solid fa-briefcase"></i> Experience
        </NavLink></li>
        <li><NavLink to="projects" className="nav-link">
          <i className="fa-solid fa-tools"></i> Projects
        </NavLink></li>
        <li> <NavLink to="blog" className="nav-link">
          <i className="fa-solid fa-file-lines"></i> Blog
        </NavLink></li>
        <li><NavLink to="contact-me" className="nav-link">
          <i className="fa-solid fa-envelope"></i> Contact
        </NavLink></li>
      </ul>
    </nav>
  );
};
