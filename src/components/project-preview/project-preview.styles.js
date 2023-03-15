import styled from "styled-components";

import {
  CaptionText,
  Heading1,
  MediumText,
} from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
    object-fit: 100% 100%;
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
  overflow: hidden;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 14px;
`;

export const ProjectTitle = styled(Heading1)`
  align-self: flex-start;
  text-transform: uppercase;
  color: rgba(26, 33, 81, 0.7);
  margin-bottom: 0;
`;

export const ProjectDetails = styled.section`
  align-self: end;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 300px;
`;

export const ProjectDescription = styled(MediumText)`
  width: 90%;
  margin-bottom: 30px;
`;

export const BtnGroup = styled.div`
  align-self: flex-end;
  justify-self: flex-start;
  display: flex;
  gap: 20px;
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
  font-weight: 500;
`;

export const TechStackWrapper = styled.div`
  background: rgba(26, 33, 81, 0.7);
  box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  height: 48px;
  display: grid;
  grid-template-columns: 160px 2fr;
  place-items: center;
  padding: 4px;
`;

export const InnerWrapper = styled.div`
  background: #ab87ff;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  max-width: 160px;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const TechList = styled.ul`
  overflow: auto;
  display: flex;
  width: 100%;
  gap: 33px;
  padding: 0 20px;
  list-style-type: none;

  &::-webkit-scrollbar {
    height: 0;
  }
`;
