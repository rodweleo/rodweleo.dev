import { useEffect } from "react";

export const NavBar = () => {
  useEffect(() => {
    const navlinks = document.getElementsByClassName("nav-link");
    //set the active nav link
    navlinks[0].classList.add("active");

    for (let i = 0; i < navlinks.length; i++) {
      const navLink = navlinks[i];
      navLink.addEventListener("click", () => {
        // Remove "active" class from all links
        for (let j = 0; j < navlinks.length; j++) {
          navlinks[j].classList.remove("active");
        }
        // Add "active" class to the clicked link then close the nav bar
        navLink.classList.add("active");
        document.getElementById("main-nav-bar")?.classList.remove("open");
      });
    }
  }, []);

  function closeNavBar() {
    const mainNavBar = document.getElementById("main-nav-bar");
    mainNavBar?.classList.remove("open");
  }

  return (
    <nav id="main-nav-bar">
      <i
        className="fa-solid fa-close text-white scale-150 fixed right-0 mt-8 mr-5 cursor-pointer z-50"
        onClick={() => closeNavBar()}></i>
      <a href="#about-leo" className="nav-link">
        About
      </a>
      <a href="#services" className="nav-link">
        Services
      </a>
      <a href="#portfolio" className="nav-link">
        Portfolio
      </a>
      <a href="#projects" className="nav-link">
        Projects
      </a>
      <a href="#contact-me" className="nav-link">
        Contact
      </a>
    </nav>
  );
};
