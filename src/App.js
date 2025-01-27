import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Certifications />
      <Internship />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
