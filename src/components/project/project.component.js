import React from "react";

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

const Project = ({ project }) => {
  const { imgSrc, title, description, techStack } = project;

  return (
    <Wrapper>
      <ImageWrapper>
        <Projectmage src={require(`../../images/${imgSrc}`).default} />
      </ImageWrapper>
      <ProjectDetails>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechLinkWrapper>
          <TechStack>
            {techStack.map((item) => (
              <Tech>{item}</Tech>
            ))}
          </TechStack>
          <LinkIcon
            src={
              require("../../images/icons/codicon_link-external.svg").default
            }
          />
        </TechLinkWrapper>
      </ProjectDetails>
    </Wrapper>
  );
};
export default Project;
