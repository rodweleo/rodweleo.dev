import ContactMe from "../components/Contact Me";
import MainService from "../components/Services";
import Testimonials from "../components/Testimonials";
import About from "./About";
import Projects from "./Projects";

const Homepage = () => {
  return (
    <>
      <About />
      <MainService />
      <Projects />
      <Testimonials />
      <ContactMe />
    </>
  );
};

export default Homepage;
