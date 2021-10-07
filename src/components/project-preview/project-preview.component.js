import React, { useEffect, useRef } from "react";
import { gsap, Power0 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { projectData } from "../../data/projectData";
import Project from "../project/project.component";

import { Wrapper } from "./project-preview.styles";

gsap.registerPlugin(ScrollTrigger);

const ProjectPreview = () => {
  // let projectRefs = useRef([]);
  // projectRefs.current = [];

  // useEffect(() => {
  //   gsap.from(projectRefs.current, {
  //     scrollTrigger: {
  //       trigger: projectRefs.current[0],
  //       markers: true,
  //       start: "top+=50 center",
  //     },
  //     ease: Power0.easeInOut,
  //     autoAlpha: 0,
  //     x: 200,
  //     delay: 0.4,
  //     stagger: 0.2,
  //   });
  // });

  // const addToRefs = (el) => {
  //   if (el && !projectRefs.current.includes(el)) {
  //     projectRefs.current.push(el);
  //   }
  // };

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
