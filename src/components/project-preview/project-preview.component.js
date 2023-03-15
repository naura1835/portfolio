import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { projectData } from "../../data/projectData";
// import Project from "../project/project.component";
import { PaginationBtn } from "../custom-button/custom-button.component";

import {
  BtnGroup,
  ImageWrapper,
  InnerWrapper,
  ProjectDescription,
  ProjectDetails,
  ProjectsWrapper,
  ProjectTitleWrapper,
  TechList,
  TechSpan,
  TechStackWrapper,
  Wrapper,
} from "./project-preview.styles";

gsap.registerPlugin(ScrollTrigger);

const ProjectPreview = () => {
  let projectSecRef = useRef(null);

  const [index, setIndex] = useState(0);

  console.log("redraw" + index);

  const nextProject = () => {
    if (index === projectData.length - 1) return;
    setIndex((previousIndex) => previousIndex + 1);
  };

  const previousProject = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  useEffect(() => {
    const projectTitle = projectSecRef.children[0].children[0];

    gsap.from(projectTitle.children, {
      scrollTrigger: {
        trigger: projectSecRef,
      },
      y: 20,
      autoAlpha: 0,
      duration: 0.5,
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
        <img src={require(`../../images/${projectData[index].imgSrc}`)} />
      </ImageWrapper>
      <ProjectDetails>
        <BtnGroup>
          <PaginationBtn type="back" handleClick={previousProject} />
          <PaginationBtn type="forward" handleClick={nextProject} />
        </BtnGroup>
        <ProjectDescription>
          {projectData[index].description}
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

      {/* <ProjectsWrapper>
        {projectData.map((project, index) => (
          <Fragment key={index}>
            <TechChip
              tech={{name: project.title}}
              className={
                isActive == project.title
                  ? "project-chip is-active"
                  : "project-chip"
              }
              handleClick={() => {
                setIsActive(project.title);
                setIndex(project.id)
              }}
            />
          </Fragment>
        ))}
      </ProjectsWrapper> */}
    </Wrapper>
  );
};

export default ProjectPreview;
