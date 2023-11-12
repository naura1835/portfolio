import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { CONTACT_DATA } from "../../data/contactData";
import ContactForm from "../contact-form/contact-form.component";

import { ContactIntro, Wrapper } from "./contact.styles";
import { BodyMainText, Display } from "../../globalStyles/textStyles";

gsap.registerPlugin(ScrollTrigger);

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
