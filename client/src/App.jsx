import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

// We create a separate Home component to keep App.jsx clean
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
      {/* Navbar stays here so it shows up on EVERY page */}
      <Navbar />

      <Routes>
        {/* Route for the Main Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Route for the Login Page */}
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Footer stays here so it shows up on EVERY page */}
      <Footer />
    </Router>
  );
};

export default App;
