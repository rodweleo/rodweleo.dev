import { NavLink } from "react-router-dom";

export const NavBar = () => {


  return (
    <nav id="main-nav-bar">
      <i
        className="fa-solid fa-close text-white scale-150 fixed right-0 mt-8 mr-5 cursor-pointer z-50"
      ></i>
      <NavLink to="/" className="nav-link">
        Skills
      </NavLink>
      <NavLink to="services" className="nav-link">
        Experience
      </NavLink>
      <NavLink to="contact-me" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
};
