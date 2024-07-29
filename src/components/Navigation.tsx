import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        <li>
          <a href="/#" className="nav-link">
            <i className="fa-solid fa-briefcase hidden"></i>
            Home
          </a>
        </li>
        <li>
          <a href="/#technical-skills" className="nav-link">
            <i className="fa-solid fa-briefcase hidden"></i>
            Technical Skills
          </a>
        </li>
        <li>
          <a href="/#work-experience" className="nav-link">
            <i className="fa-solid fa-briefcase hidden"></i>
            Experience
          </a>
        </li>
        <li>
          <a href="/#projects" className="nav-link">
            <i className="fa-solid fa-tools hidden"></i>
            Projects
          </a>
        </li>
        <li>
          <NavLink to="blog" className="nav-link">
            <i className="fa-solid fa-file-lines hidden"></i>
            Blog
          </NavLink>
        </li>
        <li>
          <a href="/#contact-me" className="nav-link">
            <i className="fa-solid fa-phone hidden"></i>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
