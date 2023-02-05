import React, { Fragment, useState } from "react";

import { projectData } from "../../data/projectData";
import Project from "../project/project.component";
import TechChip from "../tech-chip/tech-chip.component";

import {
  ImageWrapper,
  ProjectsWrapper,
  ProjectTitleWrapper,
  TechSpan,
  Wrapper,
} from "./project-preview.styles";

const ProjectPreview = () => {
  const projectNames = [
    { name: "scribbs beauty" },
    { name: "the career guide" },
    { name: "hatch gardens" },
    { name: "zayytun" },
  ];
  const [isActive, setIsActive] = useState("scribbs beauty");
  console.log(isActive);

  return (
    <Wrapper>
      <ImageWrapper>
        <ProjectTitleWrapper>
          <TechSpan>Scribbs</TechSpan>
        </ProjectTitleWrapper>
        <img src={require(`../../images/${projectData[1].imgSrc}`).default} />
      </ImageWrapper>
      <ProjectsWrapper>
        {projectNames.map((project, index) => (
          <Fragment key={index}>
            <TechChip
              tech={project}
              className={
                isActive == project.name
                  ? "project-chip is-active"
                  : "project-chip"
              }
              handleClick={() => {
                setIsActive(project.name);
              }}
            />
          </Fragment>
        ))}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default ProjectPreview;

// {/* <div
//             key={index}
//             className={isActive == project.name && "is-active"}
//             onClick={() => {
//               setIsActive(project.name);
//             }}
//           > */}

{
  /* <Project project={project} /> */
}
{
  /* </div> */
}
