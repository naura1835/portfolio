import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  max-width: 25rem;
  width: 100%;
  min-height: 15rem;
  height: 100%;
  border-radius: 0.625rem;
  background: rgba(26, 33, 81, 0.1);
  padding: 1.4rem;

  > a {
    align-self: flex-end;
    color: rgba(26, 33, 81, 1);
    font-weight: 600;
    text-transform: uppercase;
  }
`;
