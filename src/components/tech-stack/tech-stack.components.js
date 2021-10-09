import gsap from "gsap";
import React, { useEffect, useRef } from "react";

import { techData } from "../../data/techData";
import TechChip from "../tech-chip/tech-chip.component";

import {
  TechDescription,
  TechStackWrapper,
  Wrapper,
} from "./tech-stack.styles";

const TechStack = () => {
  let techRef = useRef(null);

  useEffect(() => {
    const techDescription = techRef.children[0];
    const techStack = techDescription.nextSibling;

    gsap.from(techDescription, {
      scrollTrigger: {
        trigger: techRef,
        start: "top center",
      },
      autoAlpha: 0,
      x: 20,
      delay: 0.8,
    });
    gsap.from(techStack.children, {
      scrollTrigger: {
        trigger: techRef,
        start: "top center",
      },
      autoAlpha: 0,
      stagger: 0.2,
      delay: 0.8,
    });
  });
  return (
    <Wrapper
      ref={(el) => {
        techRef = el;
      }}
    >
      <TechDescription>
        So far i have developed and maintain multiple projects from scratch. My
        current tech stack includes HTML, CSS, Javascript, React, graphql and
        Gatsby, i have also used PHP in the past.
      </TechDescription>
      <TechStackWrapper>
        {techData.map((tech, index) => (
          <TechChip key={index} tech={tech} />
        ))}
      </TechStackWrapper>
    </Wrapper>
  );
};

export default TechStack;
