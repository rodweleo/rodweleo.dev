import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Contact from "../pages/Contact";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  function toggleSidebar() {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }


  const links = document.getElementsByClassName('nav_link')
  for (let i = 0; i <= links.length; i++) {
        links[i]?.addEventListener('click', ()=>{
          //onclicking, close the nav bar
          setIsOpen(false);
        })
  }

  return(
    <>
      <header>
        <a href='/' style={{ color: 'white'}}>rodweleo.dev</a>
        <nav className={`nav_bar ${isOpen == true ? "active" : ""}`}>
          <ul>
            <li className="nav_link"><a href="#about">About</a></li> 
            <hr />
            <li className="nav_link"><a href="#skills">Skills</a></li>
            <hr />
            <li className="nav_link"><a href="#projects">Projects</a></li>
            <hr />
            <li className="nav_link"><a href="/experience">Experience</a></li>
            <hr />
            <li className="nav_link"><a href="#blog">Blog</a></li>
            <hr />
            <li className="nav_link"><a onClick={()=> setShowContact(true)}>Contact</a></li>
          </ul>
        </nav>
        <FaBars className="bars" onClick={toggleSidebar}/>
      </header>
      { showContact && <Contact onViewChange = {setShowContact}/> }
    </>
  );
}
