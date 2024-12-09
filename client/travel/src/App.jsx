import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import "./App.css"; // Optional, for any global styles
import Footer from "./assets/components/Footer/Footer";
import Destinations from "./assets/pages/Destinations/Destinations";
import Packages from "./assets/pages/Packages/Packages";
import FAQ from "./assets/pages/FAQ/FAQ";
import Testimony from "./assets/pages/Testimony/Testimony";
import Home from "./assets/pages/Home/Home";
import Contact from "./assets/pages/Contact/Contact";
import Blog from "./assets/pages/Blog/Blog";
import Agent from "./assets/pages/Agent/Agent";
import Admin from "./assets/pages/Admin/Admin";

const App = () => {
  return (
    <Router>
            {/* Add persistent components like Header */}
            <Header />

            {/* Define routes for each page */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/testimonials" element={<Testimony />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/agent" element={<Agent />} />
                <Route path="/admin" element={<Admin />} />
            
            </Routes>

            {/* Add Footer */}
            <Footer />
        </Router>
  );
};

export default App;