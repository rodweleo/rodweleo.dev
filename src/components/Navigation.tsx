import { NavLink } from "react-router-dom";

export const NavBar = () => {

  const navLinks = document.getElementsByClassName("nav-link");
  for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];
    navLink.addEventListener("click", () => {
      const mainNavBar = document.getElementById("main-nav-bar")!
      mainNavBar.classList.add("max-md:hidden")
      const bars = document.getElementsByClassName("bar")
      for (let i = 0; i < bars.length; i++) {
        if (i !== 1) {
          const bar = bars[i]
          bar.classList.toggle("opacity-0")
        } else {
          const bar = bars[i]
          bar.classList.toggle("rotate-90")
        }
      }
    })
  }
  return (
    <nav className="w-fit max-md:w-full max-md:justify-between bg-blue-800/20 backdrop-blur-2xl rounded-r-md flex gap-2 transition-all duration-300 sticky top-20 right-0 z-50 h-fit">
      <NavLink to="/" className="nav-link" >
        <i className="fa-solid fa-home"></i>
        Home
      </NavLink >
      <NavLink to="experience" className="nav-link">
        <i className="fa-solid fa-briefcase"></i>
        Experience
      </NavLink>
      <NavLink to="projects" className="nav-link">
        <i className="fa-solid fa-tools"></i>
        Projects
      </NavLink>
      <NavLink to="blog" className="nav-link">
        <i className="fa-solid fa-file-lines"></i>
        Blog
      </NavLink>
      <NavLink to="contact-me" className="nav-link">
        <i className="fa-solid fa-phone"></i>
        Contact
      </NavLink>
    </nav>
  );
};
