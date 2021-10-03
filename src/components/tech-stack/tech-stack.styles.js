import styled from "styled-components";
import { MediumText } from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${
    "" /* @media (max-width: 605px) {
    width: 100%;
  } */
  }
`;
export const Description = styled(MediumText)`
  width: 60ch;
`;
export const TechStackWrapper = styled.div`
  width: 40vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 20px;
`;
