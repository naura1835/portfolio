import React from "react";

import { TechImage, TechName, Wrapper } from "./tech-chip.styles";

const TechChip = ({ tech, className, handleClick }) => {
  const { techIcon, name } = tech;

  return (
    <Wrapper className={className} onClick={handleClick}>
      {techIcon && (
        <TechImage
          src={require(`../../images/icons/tech/${techIcon}`)}
        />
      )}
      <TechName>{name}</TechName>
    </Wrapper>
  );
};
export default TechChip;
