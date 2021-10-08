import React, { useEffect, useRef } from "react";
import { gsap, Power0 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { projectData } from "../../data/projectData";
import Project from "../project/project.component";

import { Wrapper } from "./project-preview.styles";

gsap.registerPlugin(ScrollTrigger);

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
