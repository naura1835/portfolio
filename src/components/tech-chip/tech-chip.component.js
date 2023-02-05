import React from "react";

import { TechImage, TechName, Wrapper } from "./tech-chip.styles";

const TechChip = ({ tech, className, handleClick }) => {
  const { techIcon, name } = tech;
  console.log(className);
  // className ?? console.log("project-chip");
  return (
    <Wrapper className={className} onClick={handleClick}>
      {techIcon && (
        <TechImage
          src={require(`../../images/icons/tech/${techIcon}`).default}
        />
      )}
      <TechName>{name}</TechName>
    </Wrapper>
  );
};
export default TechChip;
