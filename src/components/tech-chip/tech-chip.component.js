import React from "react";

import { TechImage, TechName, Wrapper } from "./tech-chip.styles";

const TechChip = ({ tech }) => {
  const { techIcon, name } = tech;
  return (
    <Wrapper>
      <TechImage src={require(`../../images/icons/tech/${techIcon}`).default} />
      <TechName>{name}</TechName>
    </Wrapper>
  );
};
export default TechChip;
