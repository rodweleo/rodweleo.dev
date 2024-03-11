import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { NavBar } from "./components/Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import ContactMe from "./pages/contact";
import { ExperiencePage } from "./pages/experience";
import { AnimatePresence } from "framer-motion";
import { NotFound } from "./pages/error";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <NavBar />
      <AnimatePresence mode="wait">
        <section className="min-h-screen">
          <Routes location={location} key={location.pathname}>
            <Route path="/*">
              <Route index element={<Homepage />}></Route>
              <Route path="experience" element={<ExperiencePage />}></Route>
              <Route path="contact-me" element={<ContactMe />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </section>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
