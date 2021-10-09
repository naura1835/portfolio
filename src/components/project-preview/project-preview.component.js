import React from "react";

import { projectData } from "../../data/projectData";
import Project from "../project/project.component";

import { Wrapper } from "./project-preview.styles";

const ProjectPreview = () => {
  return (
    <Wrapper>
      <>
        {projectData.map((project, index) => (
          <div key={index}>
            <Project project={project} />
          </div>
        ))}
      </>
    </Wrapper>
  );
};
export default ProjectPreview;
