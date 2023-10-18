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
        user interfaces that keep users engaged. My passion for front-end
        development stems from interacting with beautifully crafted websites. I
        love hopping on websites and seeing the effort put by other developers
        to give a user an immersive experience. Utilizing my skills i want to
        give other users that same experience thereby making going through a
        website a fun and engaging one.
      </Description>
      <Description>
        While programming is my first love, I also have an eye for design. I
        love to dabble in creating user interfaces and experimenting with
        different color schemes and layouts. I often find myself browsing
        through websites just to admire their design and functionality. Also fun
        fact i design all my individual projects myself giving customers the
        whole package.
      </Description>
      <Description>
        When I'm not writing code or designing UIs, I love to explore my other
        hobby which is baking. There's something magical about mixing
        ingredients together and watching them transform into delicious treats
        (yes i have a sweet tooth).
      </Description>
    </Wrapper>
  );
};
export default About;
