import styled from "styled-components";

import { MediumText } from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 605px) {
    width: 100%;
  }
`;
export const ContactIntro = styled(MediumText)``;
