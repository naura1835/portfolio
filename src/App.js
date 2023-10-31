import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/all";

import About from "./components/about/about.component";
import BackgroundAnimation from "./components/background-animation/background-animation.component";
import Contact from "./components/contact/contact.component";
import Header from "./components/header/header.component";
import HeroSection from "./components/hero-section/hero-section.component";
import ProjectOverview from "./components/project-overview/project-overview.component";
import Section from "./components/section/section.component";
import Services from "./components/services/services.component";
import TechStack from "./components/tech-stack/tech-stack.components";

import "./App.css";

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
        <Section
          iconSrc="icons/line-md_account-small.svg"
          altText="account icon"
          title="About"
        >
          <About />
        </Section>
        <Section
          iconSrc="icons/et_gears.svg"
          altText="folder icon"
          title="Services"
        >
          <Services />
        </Section>
        <Section
          iconSrc="icons/ph_stack-light.svg"
          altText="stack icon"
          title="Tech stack"
        >
          <TechStack />
        </Section>
        <div id="contact" />
        <Section
          iconSrc="icons/fluent_contact-card-20-regular.svg"
          altText="contact card icon"
          title="Contact"
          id="contact"
        >
          <Contact />
        </Section>
      </main>
    </div>
  );
};

export default App;
