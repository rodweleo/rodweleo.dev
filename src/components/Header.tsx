import { NavLink } from "react-router-dom";
import { NavBar } from "./Navigation";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showNavBars, setShowNavBars] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 640) {
      setShowNavBar(false);
      setShowNavBars(true);
    } else {
      setShowNavBar(true);
      setShowNavBars(false);
    }
  });
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
      {showNavBar && <NavBar />}
      {showNavBars && (
        <button className="" onClick={() => setShowNavBar(true)}>
          <FaBars />
        </button>
      )}
    </header>
  );
}
