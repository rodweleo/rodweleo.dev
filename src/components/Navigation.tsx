import { NavLink } from "react-router-dom";

export const NavBar = () => {
  /*className={`nav_bar ${isOpen == true ? "active" : ""}`}*/
  /*onClick={()=> setShowContact(true)}*/

  const links = document.getElementsByClassName("nav_link");
  for (let i = 0; i <= links.length; i++) {
    links[i]?.addEventListener("click", () => {
      //onclicking, close the nav bar
    });
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="" className="nav_link ">
            Home
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="" className="nav_link text-white/60 font-bold">
            Portfolio
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="" className="nav_link text-white/60 font-bold">
            Testimonial
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="" className="nav_link text-white/60 font-bold">
            About
          </NavLink>
        </li>
        <hr />
        <li className="nav_link text-white/60 font-bold">
          <NavLink to="" className="nav_link text-white/60 font-bold">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
