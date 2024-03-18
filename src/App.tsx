import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { NavBar } from "./components/Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import ContactMe from "./pages/contact";
import { ExperiencePage } from "./pages/experience";
import { useEffect } from "react";
import { NotFound } from "./pages/error";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <NavBar />
      <section className="min-h-screen">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
