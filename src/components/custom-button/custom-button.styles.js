import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: fit-content;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: solid 2px rgba(26, 33, 81, 0.7);
  cursor: pointer;
  color: rgba(26, 33, 81, 1);
  text-transform: uppercase;
  font-size: 15px;
  padding: 10px 34px;
  transition: all 0.3s linear;
  transform-origin: left;

  &:hover {
    background-color: rgba(26, 33, 81, 0.7);
    color: #fff;
    border-color: transparent;
  }
`;
