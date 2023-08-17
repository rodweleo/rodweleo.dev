import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About  from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Header />
      <About/>
      <Skills/>
      <Projects/>
      <Blog/>
      <Footer />
    </>
  );
}

export default App;
