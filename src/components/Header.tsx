import { NavLink } from "react-router-dom";

export default function Header() {
  function openNavBar() {
    const mainNavBar = document.getElementById("main-nav-bar");
    mainNavBar?.classList.toggle("open");
  }
  return (
    <header className="bg-blue-500 flex items-center justify-between sticky top-0 z-50 bg-opacity-80 p-5 h-20">
      <NavLink
        to="/"
        style={{ color: "white" }}
        className="flex items-center gap-1 font-bold">
        <img src="./logo.png" alt="" className="h-10" />
        <p>
          rodwe<span className="text-blue-900">leo</span>
        </p>
      </NavLink>

      <i
        className="fa-solid fa-bars text-white cursor-pointer hidden"
        onClick={() => openNavBar()}></i>
    </header>
  );
}
