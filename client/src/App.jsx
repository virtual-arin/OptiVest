import React from "react";
import HomePage from "./components/home/HomePage";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup";
import AboutPage from "./components/about/AboutPage";
import ProductPage from "./components/products/ProductPage";
import PricingPage from "./components/pricing/PricingPage";
import SupportPage from "./components/support/SupportPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
