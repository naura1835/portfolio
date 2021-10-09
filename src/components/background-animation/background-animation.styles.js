import styled from "styled-components";

export const Wrapper = styled.div`
  // height: calc(100vh - 4.4rem);
  height: 90vh;
  width: 100%;
`;
export const Pixel = styled.div`
  position: absolute;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  opacity: 0;
  visibility: hidden;
  transform: scale(0.8);

  background: ${(props) => props.pixelColor};
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  left: ${(props) => props.leftPosition};
  top: ${(props) => props.topPosition};
  transition: all 1s linear;

  &:hover {
    transform: translate(5px) rotate(-2deg) skew(2deg);
  }
  @media (max-width: 480px) {
    height: calc(${(props) => props.size} - 10px);
    width: calc(${(props) => props.size} - 10px);
    // &:nth-child(2n + 5) {
    //   display: none;
    // }
  }
`;
