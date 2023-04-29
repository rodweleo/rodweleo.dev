import { useState } from "react";
import { Link } from "../node_modules/react-router-dom/dist/index";

const nav_bar = [
  { title: "Home", isActive: false, id: 1 },
  { title: "Projects", isActive: false, id: 2 },
  { title: "About", isActive: false, id: 3 },
  { title: "Contact", isActive: false, id: 4 },
];

function toggleActive() {
  alert("Active");
}

export function NavBar() {
  return (
    <div className="nav_bar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  );
}
