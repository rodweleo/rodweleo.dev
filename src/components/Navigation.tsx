import { NavLink } from "react-router-dom";

export const NavBar = () => {

  const mainNavBar = document.getElementById("main-nav-bar")
  const handleClick = () => {
    mainNavBar?.classList.remove("open")
  }

  const navLinks = document.getElementsByClassName("nav-link");
  for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];

    navLink.addEventListener("click", () => {
      mainNavBar?.classList.remove("open")
    })
  }
  return (
    <nav id="main-nav-bar">
      <i
        className="fa-solid fa-close text-white scale-150 fixed right-0 mt-8 mr-5 cursor-pointer z-50"
        onClick={() => handleClick()}
      ></i>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="experience" className="nav-link">
        Experience
      </NavLink>
      <NavLink to="contact-me" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
};
