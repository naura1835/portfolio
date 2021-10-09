import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/all";

import { Wrapper, Description } from "./about.styles";

const About = () => {
  let aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef, {
      scrollTrigger: {
        trigger: aboutRef,
        start: "top center",
      },
      autoAlpha: 0,
      x: 20,
      delay: 0.8,
    });
  });
  return (
    <Wrapper
      ref={(el) => {
        aboutRef = el;
      }}
    >
      <Description>
        A front end developer building captivating user interfaces that keep
        users engaged while offering reliable solutions from concept to design
        and finally development phase. I'm constantly looking for opportunities
        to learn new thing and gain experiences while putting what i've learnt
        into action.
      </Description>
      <Description>
        I am a very outgoing person who is passionate about programming among
        other things, when i am not behind a computer screen you'd find me in
        the kitchen doing what i love which is baking. I am also an ARMY (BTS
        fan) so that should tell you about how determined i am.
      </Description>
    </Wrapper>
  );
};
export default About;
