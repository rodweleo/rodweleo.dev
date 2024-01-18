import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { NavBar } from "./components/Navigation";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
