import styled from "styled-components";
import { BodyMainText, H2 } from "../../globalStyles/textStyles";

export const Wrapper = styled.div`
  width: 100%;
  height: 24rem;
  background: linear-gradient(
    287.43deg,
    rgba(26, 33, 81, 0.4) 21.87%,
    rgba(102, 51, 153, 0.7) 69.1%
  );
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > svg {
    width: 50%;
  }

  @media (max-width: 990px) {
    flex-direction: column;
    height: fit-content;
    align-items: flex-start;
    padding: 5vw 4vw;
    padding-top: 60px;
    > svg {
      width: 100%;
      height: 40%;
    }
  }
`;
export const ServiceWrapper = styled.div`
  margin: 5vw 4vw;
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 990px) {
    width: 100%;
    margin: 0;
  }
`;
export const Title = styled(H2)`
  color: #fff;
  width: 16ch;
`;
export const Description = styled(BodyMainText)`
  color: rgba(255, 255, 255, 0.8);
`;
export const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 40%;
  height: 100%;
  @media (max-width: 990px) {
    height: 20rem;
    width: 100%;
  }
`;
