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
        my name is berry allen and im the fastest man alive, when i was a child
        i saw my father killed by something impossible then and accident made me
        the impossible, to the outside world i am an ordinary phorensic
        scientist but secretly with the help of my friends at star labs i used
        my speed to fight crime and find other meta humans like me and one day i
        will find who killed my mother and get justice for my father.
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
