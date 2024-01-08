import About from "../components/about";
import ContactMe from "../components/Contact Me";
import Portfolio from "../components/Services/portfolio";
import Services from "../components/Services/services";
import Hero from "./hero";
import Projects from "./Projects";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Projects />
      <ContactMe />
    </>
  );
};

export default Homepage;
