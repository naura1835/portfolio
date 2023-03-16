import React, { useEffect, useRef, useState } from "react";
import { gsap, Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { projectData } from "../../data/projectData";
// import Project from "../project/project.component";
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

  const [index, setIndex] = useState(0);

  const nextProject = () => {
    if (index === projectData.length - 1) return;
    setIndex((previousIndex) => previousIndex + 1);

    gsap.from(projectImage.children, {
      scale: 0.6,
      // x: "100%",
      // autoAlpha: 0,
      duration: 0.8,
      transformOrigin: "bottom right",
      ease: Power2.easeOut,
    });
  };

  const previousProject = () => {
    if (index === 0) return;
    setIndex(index - 1);

    gsap.from(projectImage.children, {
      scale: 0.6,
      // x: "100%",
      // autoAlpha: 0,
      duration: 0.8,
      transformOrigin: "bottom center",
      ease: Power2.easeOut,
    });
  };

  useEffect(() => {
    const projectTitle = projectSecRef.children[0].children[0];
    const projectDesc = projectSecRef.children[1].children[1];
    const TechUsed = projectDesc.nextSibling.children[1];

    gsap.from(projectTitle.children, {
      scrollTrigger: {
        trigger: projectSecRef,
      },
      y: -20,
      autoAlpha: 0,
      duration: 0.5,
    });

    gsap.from(projectDesc.children, {
      scrollTrigger: {
        trigger: projectSecRef,
      },
      y: 100,
      autoAlpha: 0,
      duration: 0.8,
    });

    gsap.from(TechUsed.children, {
      scrollTrigger: {
        trigger: projectSecRef,
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
        <ProjectTitleWrapper>
          <TechSpan>{projectData[index].title}</TechSpan>
        </ProjectTitleWrapper>
        <ImageContent
          ref={(el) => {
            projectImage = el;
          }}
        >
          <img src={require(`../../images/${projectData[index].imgSrc}`)} />
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
