import styled from "styled-components";

import {
  BodyIntroText,
  BodyMainText,
  CaptionText,
} from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  width: 90%;
  /* height: 400px; */
  /* background-color: rgba(26, 33, 81, 0.1); */
  /* border-radius: 12px; */
  display: grid;
  grid-template-columns: 60% 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  gap: 20px;
  /* padding: 1rem; */

  @media (max-width: 1076px) {
    width: 100%;
  }
  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 967px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "picture"
      "details";
    grid-gap: 0.2rem;
    /* padding: 2rem 1rem; */
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgba(26, 33, 81, 0.15);
  display: flex;
  @media (max-width: 967px) {
    grid-area: picture;
    height: 180px;
    object-fit: cover;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const Projectmage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 12px;
  transition: clip-path 1s ease-out;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  transform: scale(0.9);
`;
export const ProjectDetails = styled.div`
  margin: 2vh;
  align-self: end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2vh;
  padding: 2vw;
  border-radius: 12px;

  @media (max-width: 967px) {
    margin: 0;
    height: auto;
    grid-area: details;
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
  align-items: center;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  gap: 5px;
  padding: 0 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 2px 4px 10px rgb(0 0 0 / 25%);
  border-radius: 10px;
  height: 48px;

  @media (max-width: 967px) {
    height: 32px;
  }
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
export const LinkIcon = styled.img`
  height: 32px;
  width: 32px;

  @media (max-width: 967px) {
    height: 20px;
    width: 20px;
  }
`;
