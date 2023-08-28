import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Article from "./components/Article";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='articles/:id' element={<Article/>}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
