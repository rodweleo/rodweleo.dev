import { NavBar } from "./NavBar";
import { SocialLinks } from "./SocialLinks";
import { FaBars } from "react-icons/fa";

export function Header() {
  //const [tab, setActiveTab] = useState(nav_bar.keys);
  return (
    <header className="header">
      <h3>rodweleo.dev</h3>
      <FaBars style={{ color: "white" }} />
      <NavBar />
    </header>
  );
}
