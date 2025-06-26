import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Startcounter from "../components/Startcounter";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Startcounter />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
