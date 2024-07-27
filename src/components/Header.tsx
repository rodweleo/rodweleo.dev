import { Link } from "react-router-dom";
import { NavBar } from "./Navigation";

export default function Header() {

  return (
    <header className="flex w-full items-center bg-white justify-between p-5 h-20 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-1 font-bold ">
        <img src="/images/logo.png" alt="Rodwell Leo" height="40" width="40" />
        <p>
          rodwe<span className="text-blue-400">leo</span>
        </p>
      </Link>
      <NavBar />
    </header>
  );
}
