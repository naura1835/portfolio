import styled from "styled-components";

import { BodyMainText, Display } from "../../globalStyles/textStyles";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Wrapper = styled.section`
  background: rgba(171, 135, 255, 0.15);
  padding: 3rem;
  display: flex;
  flex-direction: column;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
`;

export const ContactIntro = styled.div`
  ${Display}, ${BodyMainText} {
    text-align: center;
  }

  > div {
    width: 200px;
    margin-inline: auto;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    margin-top: 4rem;
    max-width: 30.75rem;

    ${Display}, ${BodyMainText} {
      text-align: start;
    }

    > div {
      margin-inline: unset;
    }
  }
`;
