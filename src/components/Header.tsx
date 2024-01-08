import { NavBar } from "./Navigation";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-500 flex items-center justify-between sticky top-0 z-50 bg-opacity-80">
      <NavLink
        to="/"
        style={{ color: "white" }}
        className="flex items-center gap-1">
        <img src="./logo.png" alt="" />
        rodweleo.dev
      </NavLink>

      <NavBar />
    </header>
  );
}
