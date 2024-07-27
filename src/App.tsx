import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { Routes, Route, useLocation } from "react-router-dom";
import ContactMe from "./pages/contact";
import { Experiences } from "./pages/experience";
import { useEffect } from "react";
import { NotFound } from "./pages/error";
import { Blog } from "./pages/blog";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="min-h-full">
      <Header />
      <section className="min-h-screen p-2.5">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
