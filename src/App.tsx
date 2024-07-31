import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NotFound } from "./pages/error";
import { Blog } from "./pages/blog";
import Footer from "./components/Footer";
import { BlogPage } from "./pages/blog/BlogPage";
import { ContactMe } from "./components/contact-me";
import { RequestAQuotePage } from "./pages/request-a-quote";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="min-h-full">
      <Header />
      <section className="min-h-screen">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog">
            <Route index element={<Blog />} />
            <Route path=":id" element={<BlogPage />} />
          </Route>
          <Route path="/contact-me" element={<ContactMe/>}/>
          <Route path="/request-a-quote" element={<RequestAQuotePage/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
