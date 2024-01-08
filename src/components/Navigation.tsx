import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex items-center relative w-full xsm:w-full justify-around">
      <ul className="flex gap-2 xsm:absolute xsm:bg-gray-800 xsm:w-full xsm:flex-col top-14 left-0">
        <li>
          <NavLink to="/" className="nav_link ">
            Home
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="#portfolio" className="nav_link text-white/60 font-bold">
            Portfolio
          </NavLink>
        </li>
        <hr />

        <hr />

        <hr />
      </ul>
      <i className="fa-solid fa-bars-staggered cursor-pointer sm:hidden xl:hidden lg:hidden 2xl:hidden text-white"></i>
    </nav>
  );
};
