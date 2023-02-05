import styled from "styled-components";

import { CaptionText, H2, Heading1 } from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 60px;
`;
export const ImageWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  /* height: 400px; */
  background-color: rgba(26, 33, 81, 0.1);
  border-radius: 20px;
  padding: 0.8rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  img {
    max-height: 300px;
    /* max-width: 600px; */
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;

export const ProjectTitleWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 20px;
  background-color: rgba(26, 33, 81, 0.15);
  padding: 0.4rem;
  margin-bottom: 0.4rem;
  display: flex;
  justify-content: center;
`;

export const ProjectTitle = styled(Heading1)`
  align-self: flex-start;
  text-transform: uppercase;
  color: rgba(26, 33, 81, 0.7);
  margin-bottom: 0;
`;

export const ProjectsWrapper = styled.section`
  justify-self: start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* width: 10rem; */
  /* div {
    max-width: 500px;
    width: 10rem;
  }
  .is-active {
    width: 12rem !important;
  }
  .is-active > div {
    background-color: rgba(171, 135, 255, 1);
  } */
`;
export const TechSpan = styled(CaptionText)`
  align-self: flex-start;
  color: rgba(26, 33, 81, 1);
`;
