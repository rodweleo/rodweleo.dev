import { NavLink } from "react-router-dom";
import { NavBar } from "./Navigation";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

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
    <header className="bg-blue-500 flex items-center justify-between sticky top-0 z-50 bg-opacity-80">
      <NavLink
        to="/"
        style={{ color: "white" }}
        className="flex items-center gap-1">
        <img src="./logo.png" alt="" />
        rodweleo.dev
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
