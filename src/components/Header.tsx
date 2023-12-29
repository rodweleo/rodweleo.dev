import { NavBar } from "./Navigation";
import { NavLink } from "react-router-dom";
import { SocialLinks } from "./social_links";

export default function Header() {
  return (
    <header className="px-5">
      <NavLink to="/" style={{ color: "white" }} className="header-logo">
        <img src="./logo.png" alt="" />
        rodweleo.dev
      </NavLink>

      <NavBar />

      <SocialLinks />
    </header>
  );
}
