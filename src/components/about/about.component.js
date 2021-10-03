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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum
        odio vitae risus pulvinar sagittis. Donec porttitor, felis sit amet
        efficitur consequat, tellus mi scelerisque metus, sit amet cursus magna
        nisi ut libero. Curabitur non ullamcorper quam, sit amet fermentum
        magna. Proin cursus ipsum libero, in fringilla ex convallis ac. Maecenas
        id elit cursus, elementum arcu eget, consectetur lorem. Integer cursus
        elementum orci sit amet imperdiet. Duis ut pretium enim.
      </Description>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum
        odio vitae risus pulvinar sagittis. Donec porttitor, felis sit amet
        efficitur consequat, tellus mi scelerisque metus, sit amet cursus magna
        nisi ut libero. Curabitur non ullamcorper quam, sit amet fermentum
        magna. Proin cursus ipsum libero, in fringilla ex convallis ac. Maecenas
        id elit cursus, elementum arcu eget, consectetur lorem. Integer cursus
        elementum orci sit amet imperdiet. Duis ut pretium enim.
      </Description>
    </Wrapper>
  );
};
export default About;
