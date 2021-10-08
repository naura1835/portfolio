import styled from "styled-components";
import { MediumText } from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70ch;

  @media (max-width: 660px) {
    width: 100%;
  }
`;
export const TechDescription = styled(MediumText)`
  width: 80%;
  @media (max-width: 660px) {
    width: 100%;
  }
`;
export const TechStackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
`;
