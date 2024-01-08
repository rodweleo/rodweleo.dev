import ContactMe from "../components/Contact Me";
import MainService from "../components/Services";
import About from "./About";
import Projects from "./Projects";

const Homepage = () => {
  return (
    <>
      <About />
      <MainService />
      <Projects />
      <ContactMe />
    </>
  );
};

export default Homepage;
