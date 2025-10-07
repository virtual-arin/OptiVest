import React from "react";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
};

export default HomePage;
