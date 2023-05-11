import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "../node_modules/react-router-dom/dist/index";
import { About } from "./pages/About";
import "./App.css";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";
import { Projects } from "./pages/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
