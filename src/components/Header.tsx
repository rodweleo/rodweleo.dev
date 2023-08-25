import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Contact from "../pages/Contact";
import { NavBar } from "./Navigation";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showContact, setShowContact] = useState(false);

  function toggleSidebar() {
    showNav === false ? setShowNav(true) : setShowNav(false);
  }

  return(
      <>
      <header>
      <a href='/' style={{ color: 'white' }}>rodweleo.dev</a>

      {<FaBars onClick={toggleSidebar} className='bars' />}

      {showNav ? <NavBar /> : ''}
    </header><hr />
    
      { showContact && <Contact onViewChange = {setShowContact}/> }
      </>
  );
}
