import styled from "styled-components";

import { MediumText } from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  width: 60ch;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 605px) {
    width: 100%;
  }
`;
export const Description = styled(MediumText)``;
