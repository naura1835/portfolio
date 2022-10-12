import styled from "styled-components";

import { H3 } from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  height: auto;
  width: 98%;
  display: grid;
  grid-template-areas:
    "icon title"
    "line content";
  grid-template-columns: 34px auto;
  grid-template-rows: repeat(2, auto);
  column-gap: 10px;
`;
export const Icon = styled.img`
  justify-self: center;
  align-self: center;
  ${
    "" /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(255, 255, 255, 0.2),
    inset 0px 0px 0px 0.5px rgba(26, 33, 81, 0.5); */
  }
`;
export const Title = styled(H3)`
  grid-area: title;
  text-transform: uppercase;
  color: rgba(26, 33, 81, 0.7);
`;
export const Path = styled.div`
  display: flex;
  width: 2px;
  height: 100%;
  justify-self: center;
  justify-content: center;
  background: rgba(26, 33, 81, 0.25);
  border-radius: 10px;
`;
export const Line = styled.span`
  width: 1px;
  height: 100%;
  background: rgba(26, 33, 81, 0.7);
`;
export const Details = styled.section`
  height: auto;
  padding: 4vh 0;
`;
