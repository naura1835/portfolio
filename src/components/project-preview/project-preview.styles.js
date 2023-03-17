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

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 30px;
  }
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

  @media (max-width: 900px) {
    align-self: center;
    max-width: 500px;
  }
`;

export const ImageContent = styled.div`
  max-height: 230px;
  /* max-width: 600px; */
  height: 100%;
  width: 100%;
  object-fit: 100% 100%;
  object-position: top center;
  overflow: hidden;
  background-color: rgba(26, 33, 81, 0.15);

  img {
    height: 100%;
    width: 100%;
    object-fit: 100% 100%;
    object-position: top center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  @media (max-width: 900px) {
    height: 300px;
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

  @media (max-width: 900px) {
    height: auto;
    gap: 20px;
  }
`;

export const ProjectDescription = styled(MediumText)`
  width: 90%;
  margin-bottom: 30px;
  overflow: hidden;

  @media (max-width: 900px) {
    margin-bottom: 0;
  }
`;

export const BtnGroup = styled.div`
  align-self: flex-end;
  justify-self: flex-start;
  display: flex;
  gap: 20px;
`;

export const TechSpan = styled(CaptionText)`
  align-self: flex-start;
  color: rgba(26, 33, 81, 1);
  font-weight: 500;

  a {
    cursor: pointer;
  }
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
