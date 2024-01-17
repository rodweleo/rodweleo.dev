import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-500 flex items-center justify-center sticky top-0 z-50 bg-opacity-80 p-5 h-20">
      <NavLink
        to="/"
        style={{ color: "white" }}
        className="flex items-center gap-1 font-bold">
        <img src="./logo.png" alt="" className="h-10" />
        <p>
          rodwe<span className="text-blue-900">leo</span>
        </p>
      </NavLink>
    </header>
  );
}
