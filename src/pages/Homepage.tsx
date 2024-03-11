import ContactMe from "../components/Contact Me";
import Portfolio from "../components/portfolio/index";
import Services from "../components/Services/index";
import Hero from "./hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Homepage = () => {
  return (
    <main className="w-full">
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Projects />
      <ContactMe />
    </main>
  );
};

export default Homepage;
