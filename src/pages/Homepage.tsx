import ContactMe from "../components/Contact Me";
import { NavBar } from "../components/Navigation";
import Portfolio from "../components/portfolio/index";
import Services from "../components/Services/index";
import Hero from "./hero";
import Projects from "./Projects";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Portfolio />
      <Projects />
      <ContactMe />
    </>
  );
};

export default Homepage;
