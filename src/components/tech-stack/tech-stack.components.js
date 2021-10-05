import React from "react";

import { techData } from "../../data/techData";
import TechChip from "../tech-chip/tech-chip.component";

import {
  TechDescription,
  TechStackWrapper,
  Wrapper,
} from "./tech-stack.styles";

const TechStack = () => {
  console.log(techData);
  return (
    <Wrapper>
      <TechDescription>
        my name is berry allen and im the fastest man alive, when i was a child
        i saw my father killed by something impossible then and accident made me
        the impossible, to the outside world i am an ordinary phorensic
        scientist but secretly with the help of my friends at star labs i used
        my speed to fight crime and find other meta humans like me and one day i
        will find who killed my mother and get justice for my father.
      </TechDescription>
      <TechStackWrapper>
        {techData.map((tech, index) => (
          <TechChip key={index} tech={tech} />
        ))}
      </TechStackWrapper>
    </Wrapper>
  );
};

export default TechStack;
