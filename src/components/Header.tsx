import { Link } from "react-router-dom";
import { NavBar } from "./Navigation";

export default function Header() {
  const mainNavBar = document.getElementById("main-nav-bar")
  const handleClick = () => {
    mainNavBar?.classList.remove("max-md:right-full")
    mainNavBar?.classList.add("max-md:right-0")
  }
  return (
    <header className="bg-blue-800/20 flex items-center justify-center space-x-60 sticky top-0 z-50 p-5 h-20 filter backdrop-blur-md">
      <Link to="/" className="text-white flex items-center gap-1 font-bold">
        <img src="/images/logo.png" alt="Rodwell Leo" height="40" width="40" />
        <p>
          rodwe<span className="text-blue-400">leo</span>
        </p>
      </Link>

      <i

        className="fa-solid fa-burger scale-150 text-white cursor-pointer hidden max-md:flex" onClick={() => handleClick()}></i>
      <NavBar />
    </header>
  );
}
