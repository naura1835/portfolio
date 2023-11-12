import styled from "styled-components";
import { breakpointsUp } from "./breakpoints";

export const Display = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  font-family: "Roboto";

  @media ${breakpointsUp["tablet-landscape-up"]} {
    font-size: 3.75rem;
  }
  @media ${breakpointsUp["tablet-portrait-up"]} {
    font-size: 3rem;
  }
  @media ${breakpointsUp["desktop-up"]} {
    font-size: 4.375rem;
  }
`;

export const Heading1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "Roboto";

  @media ${breakpointsUp["tablet-portrait-up"]} {
    font-size: 3rem;
  }
`;

export const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Roboto";

  @media ${breakpointsUp["tablet-portrait-up"]} {
    font-size: 2.375rem;
  }
`;
export const Heading3 = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Roboto";

  @media ${breakpointsUp["tablet-portrait-up"]} {
    font-size: 1.5rem;
  }
`;

export const BodyIntroText = styled.p`
  font-size: 1.25rem;
  font-family: "Roboto";
`;

export const BodyMainText = styled.p`
  font-size: 1.125rem;
  line-height: 130%;
  font-family: "Roboto";
`;

export const MediumText = styled.p`
  font-size: 1.0625rem;
  font-family: "Roboto";
  line-height: 130%;
`;

export const SmallMediumText = styled.p`
  font-size: 0.875rem;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 20px;
`;

export const CaptionText = styled.span`
  font-size: 0.9375rem;
  line-height: 18px;
  font-family: "Roboto";
`;
