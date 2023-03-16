import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/all";

import { Wrapper, Description } from "./about.styles";

const About = () => {
  let aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef, {
      scrollTrigger: {
        trigger: aboutRef,
        start: "top center_=200",
      },
      autoAlpha: 0,
      x: 20,
      delay: 0.2,
    });
  });
  return (
    <Wrapper
      ref={(el) => {
        aboutRef = el;
      }}
    >
      <Description>
        Hello there! I am a front end developer who loves building captivating
        user interfaces that keep users engaged while offering reliable
        solutions from concept to design and finally development phase. I'm
        always striving to learn more, improve my skills and gain experiences
        while putting what i've learnt into action.
      </Description>
      <Description>
        While programming is my first love, I also have an eye for design. I
        love to dabble in creating user interfaces and experimenting with
        different color schemes and layouts. I often find myself browsing
        through websites just to admire their design and functionality.
      </Description>
      <Description>
        When I'm not writing code or designing UIs, I love to explore my other
        passion which is baking. There's something magical about mixing
        ingredients together and watching them transform into delicious treats
        (yes i have a sweet tooth).
      </Description>
      {/* <Description>
        I am excited to continue to learn, explore, and create with programming,
        design, and baking. Thank you for taking the time to learn a bit about
        me.
      </Description> */}
    </Wrapper>
  );
};
export default About;
