import styled from "styled-components";
import { CaptionText } from "../../globalStyles/textStyles";

export const Wrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  /* max-width: 300px; */
  /* width: 100%; */
  height: 3rem;
  border-radius: 12px;
  background-color: rgba(26, 33, 81, 0.1);
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  /* transition: width 1s cubic-bezier(0.075, 0.82, 0.165, 1); */

  &.project-chip {
    width: 200px;
    padding: 0.5rem;
  }

  &.is-active {
    /* transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); */
    background-color: rgba(171, 135, 255, 1);
    max-width: 500px;
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 8rem;
  }
  @media (max-width: 355px) {
    width: 100%;
  }
`;
export const TechImage = styled.img``;
export const TechName = styled(CaptionText)``;
