import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }
  return (
      <header>
        <a href='/' style={{ color: 'white'}}>rodweleo.dev</a>
        <nav className={`nav_bar ${isOpen == true ? "active" : ""}`}>
          <ul>
            <li><a href="#about">About</a></li> 
            <hr />
            <li><a href="#skills">Skills</a></li>
            <hr />
            <li><a href="#projects">Projects</a></li>
            <hr />
            <li><a href="/experience">Experience</a></li>
            <hr />
            <li><a href="#blog">Blog</a></li>
            <hr />
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <FaBars className="bars" onClick={toggleSidebar}/>
      </header>
  );
}
