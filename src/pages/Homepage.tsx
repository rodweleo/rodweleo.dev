import ContactMe from "../components/Contact Me";
import Portfolio from "../components/portfolio/index";
import Services from "../components/Services/index";
import Hero from "./hero";
import Projects from "./Projects";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Projects />
      <ContactMe />
    </main>
  );
};

export default Homepage;
