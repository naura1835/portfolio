// import { gsap, Power2, Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { projectData } from "../../data/projectData";
import { Display, Heading2, MediumText } from "../../globalStyles/textStyles";

import ForwardBtn from "../../images/icons/material-symbols_arrow-forward-rounded.svg";
import BackBtn from "../../images/icons/material-symbols_arrow-back.svg";

import {
  ImageWrapper,
  Project,
  ProjectControlButton,
  ProjectControls,
  ProjectDetails,
  ProjectLink,
  ProjectList,
  Wrapper,
} from "./project-overview.styles";

gsap.registerPlugin(ScrollTrigger);

const ProjectOverview = () => {
  let index = useRef(0);
  const carouselRef = useRef(null);
  const projectsRef = useRef(null);

  const previousProject = () => {
    if (index.current < 0) return;

    index.current = index.current - 1;

    gsap.to(carouselRef.current, {
      xPercent: -25 * index.current,
    });
  };

  const nextProject = () => {
    if (index.current === 3) return;

    index.current = index.current + 1;

    gsap.to(carouselRef.current, {
      xPercent: -25 * index.current,
    });
  };

  useLayoutEffect(() => {
    gsap.set(carouselRef.current, {
      display: "flex",
      height: "80vh",
    });

    gsap.to(gsap.utils.toArray(".project"), {
      xPercent: -100 * (gsap.utils.toArray(".project").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: projectsRef.current,
        pin: true,
        scrub: 1,
        end: "+=3000",
        markers: true,
        toggleActions: "play pause reverse none",
      },
    });
  }, []);

  return (
    <Wrapper ref={projectsRef}>
      <Display style={{ color: "#AB87FF" }}>Projects</Display>
      <ProjectList>
        <div ref={carouselRef}>
          {projectData.map((project) => (
            <Project key={project.id} className="project">
              <ImageWrapper>
                <img
                  src={require(`../../images/${project.imgSrc}`)}
                  alt={`${project.title} website screenshot`}
                />
              </ImageWrapper>
              <ProjectDetails>
                <Heading2 style={{ color: "#FFFFFF" }}>
                  {project.title}
                </Heading2>
                <MediumText style={{ color: "#FFFFFF" }}>
                  {project.description}
                </MediumText>
                <div style={{ display: "flex", gap: "20px" }}>
                  <ProjectLink href={project.url}>Go to Website</ProjectLink>
                  <ProjectLink href={project.repo}>Github</ProjectLink>
                </div>
              </ProjectDetails>
            </Project>
          ))}
        </div>
      </ProjectList>
      <ProjectControls>
        <ProjectControlButton onClick={previousProject}>
          <img src={BackBtn} alt="back arrow" />
        </ProjectControlButton>
        <ProjectControlButton onClick={nextProject}>
          <img src={ForwardBtn} alt="forward arrow" />
        </ProjectControlButton>
      </ProjectControls>
    </Wrapper>
  );
};

export default ProjectOverview;
