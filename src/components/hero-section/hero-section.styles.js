import styled from "styled-components";
import { Display, H1, MediumText } from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  height: calc(100vh - 4.4rem);
  margin: 0 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 100%;
  height: auto;
  gap: 0;
  margin: 0;
`;
export const Title = styled(H1)`
  position: relative;
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 58px;
  margin: 0;
  overflow-y: hidden;
`;
export const SubTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow-y: hidden;
  color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 90px;
  margin: 0;

  font-size: 70px;
  font-weight: bold;
  font-family: "Roboto";

  @media (max-width: 995px) {
    height: 70px;
    font-size: 60px;
  }
  @media (max-width: 784px) {
    height: 60px;
    font-size: 50px;
  }
  @media (max-width: 450px) {
    height: 58px;
    font-size: 48px;
  }

  @media (max-width: 414px) {
    height: 44px;
    font-size: 34px;
  }
`;
export const SpanText = styled.div`
  position: absolute;
`;
