import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/all";

import About from "./components/about/about.component";
import BackgroundAnimation from "./components/background-animation/background-animation.component";
import Contact from "./components/contact/contact.component";
import Header from "./components/header/header.component";
import HeroSection from "./components/hero-section/hero-section.component";
import ProjectOverview from "./components/project-overview/project-overview.component";

import "./App.css";
import Articles from "./components/articles/articles.component";

const App = () => {
  let appRef = useRef(null);

  useEffect(() => {
    gsap.to(appRef, {
      duration: 0,
      css: { visibility: "visible" },
    });
  });
  return (
    <div
      className="App"
      ref={(el) => {
        appRef = el;
      }}
    >
      <Header />
      <div
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
        id="home"
      >
        <HeroSection />
        <BackgroundAnimation />
      </div>
      <main>
        <div id="projects" />
        <ProjectOverview />

        <div id="about" />
        <About />

        <div id="articles" />
        <Articles />

        <div id="contact" />
        <Contact />
      </main>
    </div>
  );
};

export default App;
