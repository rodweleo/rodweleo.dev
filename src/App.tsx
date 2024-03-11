import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { NavBar } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import ContactMe from "./pages/contact";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <Header />
      <NavBar />
      <Routes>
        <Route path="/*">
          <Route index element={<Homepage />}></Route>
          <Route path="contact-me" element={<ContactMe />}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
