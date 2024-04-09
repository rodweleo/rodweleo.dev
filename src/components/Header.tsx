import { Link } from "react-router-dom";
import { NavBar } from "./Navigation";

export default function Header() {

  return (
    <header className="flex w-full items-center justify-center space-x-60 p-5 h-20 filter sticky top-0 bg-blue-800/20 z-50 backdrop-blur-xl">
      <Link to="/" className="text-white flex items-center gap-1 font-bold ">
        <img src="/images/logo.png" alt="Rodwell Leo" height="40" width="40" />
        <p>
          rodwe<span className="text-blue-400">leo</span>
        </p>
      </Link>
      <NavBar />
    </header>
  );
}
