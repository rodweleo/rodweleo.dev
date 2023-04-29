import { Link } from "../node_modules/react-router-dom/dist/index";

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
