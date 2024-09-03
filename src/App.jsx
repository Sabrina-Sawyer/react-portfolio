import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";



function App() {
  return (
    <div> 
      <Header />
      <Routes>
        <Route path="/" element={<Aboutme />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;