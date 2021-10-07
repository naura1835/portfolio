import React, { useEffect, useRef } from "react";
import { gsap, Power0 } from "gsap";

import ContactForm from "../contact-form/contact-form.component";

import { ContactIntro, Wrapper } from "./contact.styles";

const Contact = () => {
  let contactRef = useRef(null);
  useEffect(() => {
    const contactForm = contactRef.children[1];
    gsap.from(contactForm, {
      scrollTrigger: {
        trigger: contactForm,
        start: "top center",
        markers: true,
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
