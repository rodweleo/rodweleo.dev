import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "../node_modules/react-router-dom/dist/index";
import { About } from "./pages/About";
import "./App.css";
import { Contact } from "./pages/Contact";
import { Header } from "./Header";
import { Homepage } from "./pages/Homepage";
import { Button } from "./MyButton";
import { Projects } from "./pages/Projects";
import { Footer } from "./Footer";
import { SocialLinks } from "./SocialLinks";

export const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

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
    </Router>
  );
}

export default App;
