import React, { useEffect, useRef } from "react";
import { gsap, Power0 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import ContactForm from "../contact-form/contact-form.component";

import { ContactIntro, Wrapper } from "./contact.styles";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  let contactRef = useRef(null);
  useEffect(() => {
    const contactIntro = contactRef.children[0];
    const contactForm = contactRef.children[1];
    gsap.from(contactIntro, {
      scrollTrigger: {
        trigger: contactRef,
        start: "top center+=150",
        markers: true,
      },
      autoAlpha: 0,
      x: 20,
      delay: 0.8,
    });
    gsap.from(contactForm, {
      scrollTrigger: {
        trigger: contactForm,
        start: "top center",
      },
      scale: 0.8,
      autoAlpha: 0,
      ease: Power0.easeIn,
      delay: 0.2,
      duration: 0.7,
      boxShadow: "0px 0px 0px rgba(187, 187, 187, 0.16)",
    });
  });
  return (
    <Wrapper
      ref={(el) => {
        contactRef = el;
      }}
    >
      <ContactIntro>
        I look forward to hearing from you about new projects and opportunities.
      </ContactIntro>
      <ContactForm />
    </Wrapper>
  );
};
export default Contact;
