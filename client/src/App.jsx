import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";


const Home = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

const App = () => {
  return (
    <Router>
      
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />

        
        <Route path="/login" element={<Login />} />
      </Routes>

      
      <Footer />
    </Router>
  );
};

export default App;
