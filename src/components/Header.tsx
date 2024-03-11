import { Link } from "react-router-dom";

export default function Header() {
  function openNavBar() {
    const mainNavBar = document.getElementById("main-nav-bar");
    mainNavBar?.classList.toggle("open");
  }
  return (
    <header className="bg-blue-900 flex items-center justify-between sticky top-0 z-50 bg-opacity-80 p-5 h-20">
      <Link to="/" className="text-white flex items-center gap-1 font-bold">
        <img src="/images/logo.png" alt="Rodwell Leo" height="40" width="40" />
        <p>
          rodwe<span className="text-blue-400">leo</span>
        </p>
      </Link>

      <i
        className="fa-solid fa-bars text-white cursor-pointer hidden"
        onClick={() => openNavBar()}></i>
    </header>
  );
}
