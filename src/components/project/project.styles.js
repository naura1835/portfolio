import styled from "styled-components";

import {
  BodyIntroText,
  BodyMainText,
  CaptionText,
} from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  width: 90%;
  height: 400px;
  background-color: rgba(26, 33, 81, 0.1);
  border-radius: 12px;
  display: grid;
  grid-template-columns: 60% 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  gap: 20px;
  padding: 20px;

  @media (max-width: 1076px) {
    width: 100%;
  }
  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 967px) {
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    row-gap: 40px;
    // grid-template-columns: 1fr;
    // grid-template-rows 300px auto;
    padding: 5vw;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const Projectmage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: clip-path 1s ease-out;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;
export const ProjectDetails = styled.div`
  margin: 2vh;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2vh;
  background-color: rgba(26, 33, 81, 0.15);
  padding: 2vw;
  border-radius: 12px;
  @media (max-width: 967px) {
    margin: 0;
    height: auto;
  }
`;
export const Title = styled(BodyIntroText)`
  color: rgba(0, 0, 0, 0.7);
  text-transform: capitalize;
  font-weight: bold;
`;
export const Description = styled(BodyMainText)`
  color: rgba(0, 0, 0, 0.8);
`;
export const TechLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2vh;
`;
export const TechStack = styled.div`
  display: flex;
`;
export const Tech = styled(CaptionText)`
  color: rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
  font-weight: 600;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const LinkIcon = styled.img``;
