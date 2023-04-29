import { NavBar } from "./NavBar";
import { FaBars } from "react-icons/fa";

export function Header() {
  //const [tab, setActiveTab] = useState(nav_bar.keys);

  function toggleSidebar() {
    const nav_bar = <NavBar />;
    console.log(nav_bar);
  }
  return (
    <header className="header">
      <h3>rodweleo.dev</h3>
      <NavBar />
      <button onClick={toggleSidebar} style={{ background: "#213547" }}>
        <FaBars className="bars" />
      </button>
    </header>
  );
}
