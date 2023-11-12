import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import ContactForm from "../contact-form/contact-form.component";

import { ContactIntro, Wrapper } from "./contact.styles";
import { BodyMainText, Display } from "../../globalStyles/textStyles";

gsap.registerPlugin(ScrollTrigger);
const CONTACT_DATA = [
  {
    url: "twitter.com/NauraCodes",
    imgSrc: "iconoir_twitter.svg",
    altText: "Twitter icon",
  },
  {
    url: "github.com/naura1835",
    imgSrc: "codicon_github-alt.svg",
    altText: "Github icon",
  },
  {
    url: "www.linkedin.com/in/khadija-garba-6257a4201",
    imgSrc: "ph_linkedin-logo.svg",
    altText: "LinkedIn icon",
  },
  {
    url: "mailto:khadijagarbag@gmail.com",
    imgSrc: "carbon_email.svg",
    altText: "Email icon",
  },
];
const Contact = () => {
  return (
    <Wrapper aria-labelledby="contact-heading">
      <ContactIntro>
        <Display
          id="contact-heading"
          style={{ color: "rgba(26, 33, 81, 0.70)" }}
        >
          Let's Connect
        </Display>
        <BodyMainText>
          I look forward to hearing from you about amazing projects and
          opportunity
        </BodyMainText>
        <div style={{ display: "flex", gap: "20px" }}>
          {CONTACT_DATA.map((contact, index) => (
            <a
              key={index}
              href={`https://${contact.url}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require(`../../images/icons/outline/${contact.imgSrc}`)}
                alt={contact.altText}
              />
            </a>
          ))}
        </div>
      </ContactIntro>
      <ContactForm />
    </Wrapper>
  );
};
export default Contact;
