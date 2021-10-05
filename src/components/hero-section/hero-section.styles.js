import styled from "styled-components";
import { Display, Heading1, MediumText } from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  // height: calc(100vh - 4.4rem);
  height: 90vh;
  width: -webkit-fill-available;
  margin: 0 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  // z-index: 2;
`;
export const HeroSectionContent = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Intro = styled(MediumText)`
  font-family: "Roboto Mono";
  color: rgba(0, 0, 0, 0.7);
  width: fit-content;
`;
export const TextAnimationDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 10px;
  margin: 0;
`;
export const Title = styled(Heading1)`
  position: relative;
  color: rgba(0, 0, 0, 0.7);
  overflow-y: hidden;
  text-align: center;
`;
export const SubTitle = styled(Display)`
  position: relative;
  overflow-y: hidden;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
`;
export const SpanText = styled.div`
  display: inline-block;
  transform: translateY(100%);
`;
