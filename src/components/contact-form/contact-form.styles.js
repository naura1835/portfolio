import styled from "styled-components";

export const Wrapper = styled.form`
  background-color: rgba(26, 33, 81, 0.1);
  border-radius: 12px;
  background-color: rgba(26, 33, 81, 0.1);
  box-shadow: 0px 4px 8px rgba(26, 33, 81, 0.4);
  backdrop-filter: blur(20px);
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 2rem;
  grid-gap: 20px;
  max-width: 480px;
  width: 100%;
  height: auto;
  margin-inline: auto;
`;

export const CustomTextArea = styled.textarea`
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
    width: 100%;
  }
`;
