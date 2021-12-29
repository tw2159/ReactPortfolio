import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
