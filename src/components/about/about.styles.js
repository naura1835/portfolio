import styled from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";
import { Display } from "../../globalStyles/textStyles";

export const Wrapper = styled.section`
  margin-top: 0.5rem;
  padding: 3rem;

  > svg {
    width: 95%;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1rem;

    ${Display} {
      grid-column: 1/3;
    }

    > div {
      justify-self: center;
    }
  }
`;

export const TechStackWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  > * {
    width: 100%;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    margin-top: 1.5rem;
  }
`;
