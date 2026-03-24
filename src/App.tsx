import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Legacy from "./components/Legacy";
import News from "./components/News";
import Events from "./components/Events";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#e2dfdf]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Legacy />
      <News />
      <Events />
      <Footer />
    </div>
  );
};

export default App;
