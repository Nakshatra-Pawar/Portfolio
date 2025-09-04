import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.scss";
import Resume from "./components/Resume/Resume";
import Certificates from "./components/Certificates/Certificates";
import {
  About,
  Contact,
  Earphone,
  Hero,
  Navbar,
  Projects,
  Skills,
  
} from "./components";

const App = () => {
  //aos initialization
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      <Resume />
      <Contact />
      <Earphone />
     
    </>
  );
};

export default App;
