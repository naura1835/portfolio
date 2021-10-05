import styled from "styled-components";
import { CaptionText } from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  width: 10rem;
  height: 3rem;
  border-radius: 12px;
  background-color: rgba(26, 33, 81, 0.1);
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media (max-width: 480px) {
    width: 8rem;
  }
  @media (max-width: 355px) {
    width: 100%;
  }
`;
export const TechImage = styled.img``;
export const TechName = styled(CaptionText)``;
