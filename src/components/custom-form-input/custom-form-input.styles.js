import styled from "styled-components";

export const FormInput = styled.input`
  width: 300px;
  height: 40px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  background-color: transparent;
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  font-family: "Roboto";
  box-sizing: border-box;
  border-radius: 2px;
  padding: 16px;
  padding-left: 12px;

  &:focus {
    outline: rgba(26, 33, 81, 0.7);
  }
  @media (max-width: 605px) {
    width: 80%;
  }
`;
