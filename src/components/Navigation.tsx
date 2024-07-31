import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <nav className="flex justify-between w-full">
      <ul className="flex items-center gap-10 w-full">
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

      </ul>
      <ul className="flex gap-2.5">
        <li><Button variant="outline" onClick={() => navigate("/contact-me")}>Contact Me</Button></li>
        <li><Button onClick={() => navigate("/request-a-quote")}>Request a Quote</Button></li>
      </ul>
    </nav>
  );
};
