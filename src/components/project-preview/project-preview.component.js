import React, { useEffect, useRef, useState } from "react";
import { gsap, Power2, Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { projectData } from "../../data/projectData";
import { PaginationBtn } from "../custom-button/custom-button.component";

import {
  BtnGroup,
  ImageContent,
  ImageWrapper,
  InnerWrapper,
  ProjectDescription,
  ProjectDetails,
  ProjectTitleWrapper,
  TechList,
  TechSpan,
  TechStackWrapper,
  Wrapper,
} from "./project-preview.styles";

gsap.registerPlugin(ScrollTrigger);

const ProjectPreview = () => {
  let projectSecRef = useRef(null);
  let projectImage = useRef(null);
  let projectTitleRef = useRef(null);

  const [index, setIndex] = useState(0);

  const nextProject = () => {
    if (index === projectData.length - 1) return;

    setIndex(index + 1);

    gsap.to(projectTitleRef.children, {
      keyframes: [
        { y: 20, ease: Power4.easeOut },
        { autoAlpha: 0 },
        { y: -20 },
        { y: 0, autoAlpha: 1, ease: Power4.easeOut },
      ],
      duration: 0.8,
    });
  };

  const previousProject = () => {
    if (index === 0) return;

    setIndex(index - 1);

    gsap.to(projectTitleRef.children, {
      keyframes: [
        { y: 20, ease: Power4.easeOut },
        { autoAlpha: 0 },
        { y: -20 },
        { y: 0, autoAlpha: 1, ease: Power4.easeOut },
      ],
      duration: 0.8,
    });
  };

  useEffect(() => {
    gsap.from(projectTitleRef.children, {
      scrollTrigger: {
        trigger: projectSecRef,
        start: "top center+=100",
      },
      y: -20,
      autoAlpha: 0,
      duration: 0.5,
      delay: 0.2,
    });

    gsap.from(projectImage.children, {
      scrollTrigger: {
        trigger: projectSecRef,
        start: "top center+=100",
      },
      duration: 1,
      delay: 0.2,
      ease: Power4.easeOut,
      clipPath: "polygon(20% 50%, 80% 50%, 80% 50%, 20% 50%)",
    });
  }, []);

  useEffect(() => {
    const projectDesc = projectSecRef.children[1].children[1];
    const TechUsed = projectDesc.nextSibling.children[1];

    gsap.from(projectDesc.children, {
      scrollTrigger: {
        trigger: projectSecRef,
        start: "top center+=100",
      },
      y: 100,
      autoAlpha: 0,
      duration: 0.8,
      delay: 0.2,
    });

    gsap.from(TechUsed.children, {
      scrollTrigger: {
        trigger: projectSecRef,
        start: "top center+=100",
      },
      y: 20,
      autoAlpha: 0,
      ease: Power2.easeOut,
      delay: 0.2,
      stagger: 0.3,
    });
  });

  return (
    <Wrapper
      ref={(el) => {
        projectSecRef = el;
      }}
    >
      <ImageWrapper>
        <ProjectTitleWrapper
          ref={(el) => {
            projectTitleRef = el;
          }}
        >
          <TechSpan>
            <a href={projectData[index].url} target="_blank" rel="noreferrer">
              {projectData[index].title}
            </a>
          </TechSpan>
        </ProjectTitleWrapper>
        <ImageContent
          ref={(el) => {
            projectImage = el;
          }}
        >
          <img
            src={require(`../../images/${projectData[index].imgSrc}`)}
            alt={`${projectData[index].title} website screenshot`}
          />
        </ImageContent>
      </ImageWrapper>
      <ProjectDetails>
        <BtnGroup>
          <PaginationBtn type="back" handleClick={previousProject} />
          <PaginationBtn type="forward" handleClick={nextProject} />
        </BtnGroup>
        <ProjectDescription>
          <span style={{ display: "inline-block" }}>
            {projectData[index].description}
          </span>
        </ProjectDescription>
        <TechStackWrapper>
          <InnerWrapper>
            <span>Tech Stack</span>
          </InnerWrapper>
          <TechList>
            {projectData[index].techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </TechList>
        </TechStackWrapper>
      </ProjectDetails>
    </Wrapper>
  );
};

export default ProjectPreview;
