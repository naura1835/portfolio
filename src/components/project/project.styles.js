import styled from "styled-components";

import {
  BodyIntroText,
  BodyMainText,
  CaptionText,
} from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  width: 22rem;
  height: 30rem;
  background-color: rgba(26, 33, 81, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;
export const ImageWrapper = styled.div`
  width: 22rem;
  height: 15rem;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const Projectmage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
export const ProjectDetails = styled.div`
  margin: 2vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
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
  justify-content: space-between;
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
