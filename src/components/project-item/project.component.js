import React, { useEffect, useRef } from "react";
import { gsap, Power0, Power1 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  Description,
  ImageWrapper,
  LinkIcon,
  ProjectDetails,
  Projectmage,
  TechLinkWrapper,
  Title,
  Wrapper,
} from "./project.styles";

gsap.registerPlugin(ScrollTrigger);

const Project = ({ project }) => {
  const { imgSrc, title, description, url } = project;

  let projectRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef,
        start: "top+=50 center",
      },
    });
    tl.from(projectRef, {
      // ease: SlowMo.easeIn,
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.7,
      ease: Power0.easeIn,
      // x: "100%",
      delay: 0.4,
      stagger: 0.2,
    });
    tl.from(
      projectRef.children[0].children[0],
      {
        duration: 0.7,
        delay: 0.4,
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      },
      "s"
    );
    tl.from(projectRef.children[0].children[1], {
      duration: 0.5,
      delay: 0.6,
      autoAlpha: 0,
    });
    tl.from(
      projectRef.children[1],
      {
        autoAlpha: 0,
        delay: 0.4,
        scaleY: 0.4,
        transformOrigin: "top",
      },
      "s"
    );
    tl.from(projectRef.children[1].children, {
      autoAlpha: 0,
    });
    gsap.to(projectRef.children[0].children[1], {
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      y: -2,
      ease: Power1.easeInOut,
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
        <TechLinkWrapper>
          <a href={url} target="_blank" rel="noreferrer">
            <LinkIcon
              src={
                require("../../images/icons/codicon_link-external.svg").default
              }
            />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <LinkIcon
              src={require("../../images/icons/codicon_github-alt.svg").default}
            />
          </a>
        </TechLinkWrapper>
      </ImageWrapper>
      <ProjectDetails>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </ProjectDetails>
    </Wrapper>
  );
};
export default Project;
