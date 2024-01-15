import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [showCloseTag, setShowCloseTag] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 640) {
      setShowCloseTag(true);
    } else {
      setShowCloseTag(false);
    }
  });

  function closeNavBar() {
    console.log("Closing");
  }
  return (
    <nav className="flex items-center relative justify-center">
      {showCloseTag && (
        <i
          className="fa-solid fa-x text-red-500"
          onClick={() => closeNavBar()}></i>
      )}
      <ul className="flex gap-2 text-white/50">
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="">Portfolio</NavLink>
        </li>
        <hr />
      </ul>
    </nav>
  );
};
