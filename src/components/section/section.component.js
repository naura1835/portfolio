import React, { useRef, useEffect } from "react";
import { gsap, Power1 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

import { Wrapper, Icon, Title, Line, Details, Path } from "./section.styles";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Section = ({ iconSrc, altText, title, children }) => {
  let sectionRef = useRef(null);

  useEffect(() => {
    const iconRef = sectionRef.children[0];
    const titleRef = iconRef.nextSibling;
    const lineRef = titleRef.nextSibling;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef,
        start: "top center+=200",
        end: "bottom center+=50",
        toggleActions: "play none none none",
      },
    });
    tl.from(
      iconRef,
      {
        autoAlpha: 0,
        delay: 0.2,
        y: 20,
      },
      "s"
    );
    tl.from(
      titleRef,
      {
        autoAlpha: 0,
        delay: 0.2,
        x: 20,
      },
      "s"
    );

    gsap.to(lineRef.children, {
      scrollTrigger: {
        trigger: sectionRef,
        start: "top center+=200",
        end: "bottom center+=50",
        scrub: 1,
        toggleActions: "play none none none",
      },
      height: "100%",
      transformOrigin: "top",
      ease: Power1.easeInOut,
      delay: 0.2,
      // motionPath: lineRef,
    });
  });

  return (
    <>
      <Wrapper
        ref={(el) => {
          sectionRef = el;
        }}
      >
        <Icon src={require(`../../images/${iconSrc}`)} alt={altText} />
        <Title>{title}</Title>
        <Path>
          <Line />
        </Path>
        <Details>{children}</Details>
      </Wrapper>
    </>
  );
};

export default Section;
