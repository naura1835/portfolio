import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SlowMo } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import {
  Description,
  ImageWrapper,
  LinkIcon,
  ProjectDetails,
  Projectmage,
  Tech,
  TechLinkWrapper,
  TechStack,
  Title,
  Wrapper,
} from "./project.styles";

gsap.registerPlugin(ScrollTrigger);

const Project = ({ project }) => {
  const { imgSrc, title, description, techStack } = project;

  let projectRef = useRef(null);

  useEffect(() => {
    gsap.from(projectRef, {
      scrollTrigger: {
        trigger: projectRef,
        markers: true,
        start: "top+=50 center",
      },
      ease: SlowMo.easeIn,
      duration: 1.4,
      autoAlpha: 0,
      x: "100%",
      delay: 0.4,
      stagger: 0.2,
    });
  });

  return (
    <Wrapper
      ref={(el) => {
        projectRef = el;
      }}
    >
      <ImageWrapper>
        <Projectmage src={require(`../../images/${imgSrc}`).default} />
      </ImageWrapper>
      <ProjectDetails>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <TechLinkWrapper>
          {/* <TechStack>
            {techStack.map((item) => (
              <Tech>{item}</Tech>
            ))}
          </TechStack> */}
          <Link to="/">
            <LinkIcon
              src={
                require("../../images/icons/codicon_link-external.svg").default
              }
            />
          </Link>
        </TechLinkWrapper>
      </ProjectDetails>
    </Wrapper>
  );
};
export default Project;
