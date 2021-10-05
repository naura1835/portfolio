import React from "react";

import About from "./components/about/about.component";
import BackgroundAnimation from "./components/background-animation/background-animation.component";
import Contact from "./components/contact/contact.component";
import Header from "./components/header/header.component";
import HeroSection from "./components/hero-section/hero-section.component";
import ProjectPreview from "./components/project-preview/project-preview.component";
import Section from "./components/section/section.component";
import TechStack from "./components/tech-stack/tech-stack.components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <HeroSection />
        <BackgroundAnimation />
      </div>
      <main>
        <Section
          iconSrc="icons/line-md_account-small.svg"
          altText="account icon"
          title="About"
        >
          <About />
        </Section>
        <Section
          iconSrc="icons/akar-icons_folder.svg"
          altText="folder icon"
          title="Projects"
        >
          <ProjectPreview />
        </Section>
        <Section
          iconSrc="icons/ph_stack-light.svg"
          altText="stack icon"
          title="Tech stack"
        >
          <TechStack />
        </Section>
        <Section
          iconSrc="icons/fluent_contact-card-20-regular.svg"
          altText="contact card icon"
          title="Contact"
        >
          {/* <Contact /> */}
        </Section>
      </main>
    </div>
  );
};

export default App;
