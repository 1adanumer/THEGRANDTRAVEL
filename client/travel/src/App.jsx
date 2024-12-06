import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import "./App.css"; // Optional, for any global styles
import Footer from "./assets/components/Footer/Footer";
import Destinations from "./assets/pages/Destinations/Destinations";
import Packages from "./assets/pages/Packages/Packages";

import Home from "./assets/pages/Home/Home";

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
            
            </Routes>

            {/* Add Footer */}
            <Footer />
        </Router>
  );
};

export default App;