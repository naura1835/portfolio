import styled from "styled-components";

export const ButtonWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.twt {
    right: 140px;
    top: 22px;
  }
  &.github {
    left: 40px;
    top: -58px;
  }
  &.linkedIn {
    left: 200px;
    bottom: -64px;
  }
  &.email {
    right: 300px;
    top: 240px;
  }

  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 6px 9px 5px rgba(0, 0, 0, 0.25);
  background: rgba(242, 246, 255, 1);
  z-index: 2;
  visibility: none;

  @media (max-width: 980px) {
    &.twt {
      right: 100px;
    }
  }
`;
export const SocialIcon = styled.img``;
